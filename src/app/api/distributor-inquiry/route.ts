import { NextResponse } from "next/server";

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
      id: "DIST-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      email: email || "N/A",
      businessName: businessName || "Prospective Partner",
      city,
      state: state || "Uttar Pradesh",
      expectedVolume: expectedVolume || "500-1000 Cases/Month",
      notes: notes || "",
      timestamp: new Date().toISOString(),
      status: "Under Territory Review",
    };

    console.log("New Distributor Application Received:", application);

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
