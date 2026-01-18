import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service?: string;
  issue?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, postcode, service, issue, message } = body;

    // Validate required fields
    if (!name || !phone || !postcode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const serviceType = service || issue || "Not specified";
    const contactEmail = process.env.CONTACT_EMAIL || "info@dampproofing-essex.co.uk";

    // Send email to business
    const { error } = await resend.emails.send({
      from: "Essex Damp Solutions <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email || undefined,
      subject: `New Damp Survey Enquiry from ${name} - ${postcode}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a5276; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Survey Enquiry</h1>
          </div>

          <div style="padding: 30px; background-color: #f8f9fa;">
            <h2 style="color: #1a5276; margin-top: 0;">Contact Details</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                  <a href="tel:${phone}" style="color: #1a5276;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">
                  ${email ? `<a href="mailto:${email}" style="color: #1a5276;">${email}</a>` : "Not provided"}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Postcode:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${postcode}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Service:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #dee2e6;">${serviceType}</td>
              </tr>
            </table>

            ${message ? `
              <h3 style="color: #1a5276; margin-top: 25px;">Message</h3>
              <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1a5276;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            ` : ""}

            <div style="margin-top: 30px; padding: 15px; background-color: #d4edda; border-radius: 5px;">
              <p style="margin: 0; color: #155724;">
                <strong>Action Required:</strong> Please contact this customer within 24 hours to arrange their free survey.
              </p>
            </div>
          </div>

          <div style="background-color: #1a5276; padding: 15px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">
              This enquiry was submitted via essexdampsolutions.co.uk
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
