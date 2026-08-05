import { NextResponse } from "next/server";

const DEFAULT_DISTRIBUTOR_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzfxsZVnADhwQo23d6viDHZG9A1gCCjySFluk_LfPNzrB8Yce3U0B9fG9CG57KKo74/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, businessName, city, state, expectedVolume, notes } = body;

    if (!name || !phone || !city) {
      return NextResponse.json(
        { error: "Please fill in all mandatory dealership fields." },
        { status: 400 }
      );
    }

    const application = {
      type: "Distributor Application",
      id: "DIST-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      email: email || "N/A",
      businessName: businessName || "Prospective Partner",
      city,
      state: state || "Uttar Pradesh",
      expectedVolume: expectedVolume || "500-1000 Cases/Month",
      notes: notes || "",
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    console.log("New Distributor Application Received:", application);

    // Forward to Distributor Application Google Sheet Webhook
    const webhookUrl =
      process.env.DISTRIBUTOR_SHEETS_WEBHOOK_URL ||
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      DEFAULT_DISTRIBUTOR_WEBHOOK_URL;

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application),
      });
    } catch (err) {
      console.error("Failed to post distributor application to Google Sheets Webhook:", err);
    }

    return NextResponse.json({
      success: true,
      message: "Dealership Application Submitted Successfully! Our distribution expansion manager will contact you within 24 hours.",
      applicationId: application.id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
