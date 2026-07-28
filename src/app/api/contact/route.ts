import { NextResponse } from "next/server";

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

    // Process submission (simulated database record)
    const submission = {
      id: "REQ-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      businessName: businessName || "Individual Customer",
      city,
      requirement: requirement || "General Inquiry",
      timestamp: new Date().toISOString(),
      status: "Received",
    };

    console.log("New Contact Inquiry Received:", submission);

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
