import { NextResponse } from "next/server";
import { validateContactForm } from "../../../lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phoneNumber, message } = body;

    // Validate the form data
    const validationErrors = validateContactForm({
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    if (validationErrors.length > 0) {
      return NextResponse.json({ errors: validationErrors }, { status: 400 });
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store in a database
    // 3. Integrate with a CRM system

    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    });

    return NextResponse.json(
      { message: "Thank you for your message. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
