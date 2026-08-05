import { NextResponse } from "next/server";

const DEFAULT_CONTACT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbztDqPJ7yBx-iH4x0ATbhmfxoh9iSNE1SQadCT0NRItdhcn5tpHKbhQzQk2xyuvrzcn/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, businessName, city, requirement } = body;

    if (!name || !phone || !city) {
      return NextResponse.json(
        { error: "Please provide all required fields: Name, Phone, and City." },
        { status: 400 }
      );
    }

    const submission = {
      type: "Contact Inquiry",
      id: "REQ-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      businessName: businessName || "Individual Customer",
      city,
      requirement: requirement || "General Inquiry",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    console.log("New Contact Inquiry Received:", submission);

    // Forward to Contact Form Google Sheet Webhook
    const webhookUrl =
      process.env.CONTACT_SHEETS_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      DEFAULT_CONTACT_WEBHOOK_URL;

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      console.error("Failed to post Contact Inquiry to Google Sheets Webhook:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been received. Our ASA Beverages sales representative will contact you shortly.",
      referenceId: submission.id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}
