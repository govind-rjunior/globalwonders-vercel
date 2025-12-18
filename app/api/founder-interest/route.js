import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      mobile,
      companyName,
      websiteOrLinkedIn,
      sector,
      otherSector,
      pitch,
      fundingStatus,
      roundAndAmount,
      message,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !mobile ||
      !companyName ||
      !sector ||
      !pitch ||
      !fundingStatus ||
      !roundAndAmount
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If sector is "Other", otherSector is required
    if (sector === "Other" && !otherSector) {
      return NextResponse.json(
        { error: "Please specify the sector" },
        { status: 400 }
      );
    }

    const finalSector = sector === "Other" ? otherSector : sector;

    // Email to info@globalwonders.co
    const { data: notificationData, error: notificationError } =
      await resend.emails.send({
        from: "Global Wonders <no-reply@no-reply.globalwonders.co>",
        to: "info@globalwonders.co",
        subject: `🚀 New Founder Interest: ${companyName} - ${finalSector}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 650px; 
              margin: 0 auto; 
              background-color: #ffffff;
            }
            .header { 
              background: linear-gradient(135deg, #1B7A72 0%, #15645d 100%);
              color: white; 
              padding: 30px 20px; 
              text-align: center;
            }
            .header h1 {
              margin: 0 0 5px 0;
              font-size: 26px;
              font-weight: 600;
            }
            .header .badge {
              display: inline-block;
              background-color: rgba(255,255,255,0.2);
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-top: 8px;
            }
            .content { 
              padding: 30px 20px;
            }
            .highlight-section {
              background: linear-gradient(135deg, #f0fdfa 0%, #e6f7f5 100%);
              border-left: 4px solid #1B7A72;
              padding: 20px;
              margin-bottom: 25px;
              border-radius: 8px;
            }
            .highlight-section h2 {
              margin: 0 0 8px 0;
              color: #1B7A72;
              font-size: 20px;
            }
            .highlight-section .pitch {
              font-size: 16px;
              color: #1f2937;
              font-style: italic;
              margin: 0;
            }
            .section { 
              margin-bottom: 25px;
              background-color: #f9fafb;
              border-radius: 8px;
              padding: 20px;
            }
            .section-title {
              font-weight: 600;
              color: #1B7A72;
              margin-bottom: 15px;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              border-bottom: 2px solid #1B7A72;
              padding-bottom: 8px;
            }
            .field { 
              margin-bottom: 15px;
            }
            .label { 
              font-weight: 600;
              color: #4b5563;
              margin-bottom: 4px;
              font-size: 13px;
            }
            .value { 
              color: #1f2937;
              font-size: 15px;
            }
            .value a {
              color: #1B7A72;
              text-decoration: none;
            }
            .value a:hover {
              text-decoration: underline;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            .badge-status {
              display: inline-block;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 13px;
              font-weight: 600;
            }
            .status-active {
              background-color: #dcfce7;
              color: #166534;
            }
            .status-preparing {
              background-color: #fef3c7;
              color: #92400e;
            }
            .status-not-yet {
              background-color: #e5e7eb;
              color: #374151;
            }
            .status-soft-circling {
              background-color: #dbeafe;
              color: #1e40af;
            }
            .notes-section {
              background-color: white;
              border: 2px solid #e5e7eb;
              border-radius: 8px;
              padding: 20px;
              margin-top: 20px;
            }
            .notes-section h3 {
              margin: 0 0 12px 0;
              color: #1f2937;
              font-size: 15px;
            }
            .notes-section p {
              margin: 0;
              color: #4b5563;
              line-height: 1.7;
              white-space: pre-wrap;
            }
            .footer { 
              padding: 20px;
              background-color: #f9fafb;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
            }
            .footer strong {
              color: #1f2937;
            }
            .quick-actions {
              margin-top: 25px;
              padding: 20px;
              background-color: #fffbeb;
              border-radius: 8px;
              border-left: 4px solid #f59e0b;
            }
            .quick-actions h3 {
              margin: 0 0 10px 0;
              color: #92400e;
              font-size: 14px;
            }
            .quick-actions ul {
              margin: 0;
              padding-left: 20px;
              color: #78350f;
            }
            .quick-actions li {
              margin-bottom: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Founder Interest Submission</h1>
              <div class="badge">Founder Interest Form</div>
            </div>
            
            <div class="content">
              <!-- Company Highlight -->
              <div class="highlight-section">
                <h2>${companyName}</h2>
                <p class="pitch">"${pitch}"</p>
              </div>

              <!-- Founder Details -->
              <div class="section">
                <div class="section-title">👤 Founder Details</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Full Name</div>
                    <div class="value">${fullName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                </div>
                <div class="field">
                  <div class="label">Mobile / WhatsApp</div>
                  <div class="value"><a href="tel:${mobile}">${mobile}</a></div>
                </div>
                ${
                  websiteOrLinkedIn
                    ? `
                <div class="field">
                  <div class="label">Website / LinkedIn</div>
                  <div class="value"><a href="${websiteOrLinkedIn}" target="_blank">${websiteOrLinkedIn}</a></div>
                </div>
                `
                    : ""
                }
              </div>

              <!-- Company Details -->
              <div class="section">
                <div class="section-title">🏢 Company Details</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Company Name</div>
                    <div class="value">${companyName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Sector</div>
                    <div class="value">${finalSector}</div>
                  </div>
                </div>
              </div>

              <!-- Funding Details -->
              <div class="section">
                <div class="section-title">💰 Funding Information</div>
                <div class="field">
                  <div class="label">Funding Status</div>
                  <div class="value">
                    <span class="badge-status ${
                      fundingStatus === "Actively fundraising"
                        ? "status-active"
                        : fundingStatus === "Preparing to raise (0–2 months)"
                        ? "status-preparing"
                        : fundingStatus === "Soft-circling / term sheet stage"
                        ? "status-soft-circling"
                        : "status-not-yet"
                    }">
                      ${fundingStatus}
                    </span>
                  </div>
                </div>
                <div class="field">
                  <div class="label">Round & Target Amount</div>
                  <div class="value" style="font-size: 18px; font-weight: 600; color: #1B7A72;">${roundAndAmount}</div>
                </div>
              </div>

              ${
                message
                  ? `
              <!-- Notes -->
              <div class="notes-section">
                <h3>📝 Additional Notes & Traction</h3>
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>
              `
                  : ""
              }

              <!-- Quick Actions -->
              <div class="quick-actions">
                <h3>⚡ Next Steps</h3>
                <ul>
                  <li>Review company background and traction</li>
                  <li>Assess fit with investor network</li>
                  <li>Schedule intro call with founder</li>
                  <li>Respond within 48 hours</li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <p><strong>🕐 Submitted:</strong> ${new Date().toLocaleString(
                "en-IN",
                {
                  timeZone: "Asia/Kolkata",
                  dateStyle: "full",
                  timeStyle: "short",
                }
              )}</p>
              <p style="margin-top: 10px;">This submission was received through the Founder Interest Form on globalwonders.co</p>
            </div>
          </div>
        </body>
        </html>
      `,
        text: `
New Founder Interest Form Submission

COMPANY: ${companyName}
PITCH: ${pitch}

FOUNDER DETAILS
---------------
Name: ${fullName}
Email: ${email}
Mobile: ${mobile}
${websiteOrLinkedIn ? `Website/LinkedIn: ${websiteOrLinkedIn}` : ""}

COMPANY DETAILS
---------------
Sector: ${finalSector}

FUNDING INFORMATION
-------------------
Status: ${fundingStatus}
Round & Amount: ${roundAndAmount}

${
  message
    ? `
ADDITIONAL NOTES
----------------
${message}
`
    : ""
}

Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      `,
      });

    if (notificationError) {
      console.error("Error sending notification email:", notificationError);
      return NextResponse.json(
        {
          error: "Failed to send notification email",
          details: notificationError.message,
        },
        { status: 500 }
      );
    }

    // Confirmation email to the founder
    const { data: confirmationData, error: confirmationError } =
      await resend.emails.send({
        from: "Global Wonders <no-reply@no-reply.globalwonders.co>",
        to: email,
        subject: `Thank you for your interest, ${fullName.split(" ")[0]}!`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto;
              background-color: #ffffff;
            }
            .header { 
              background: linear-gradient(135deg, #1B7A72 0%, #15645d 100%);
              color: white; 
              padding: 40px 20px; 
              text-align: center;
            }
            .header h1 {
              margin: 0 0 10px 0;
              font-size: 28px;
              font-weight: 600;
            }
            .logo {
              font-size: 48px;
              margin-bottom: 10px;
            }
            .content { 
              padding: 40px 30px;
            }
            .content p {
              margin: 0 0 15px 0;
              color: #4b5563;
              font-size: 15px;
            }
            .highlight-box {
              background: linear-gradient(135deg, #f0fdfa 0%, #e6f7f5 100%);
              border-left: 4px solid #1B7A72;
              padding: 20px;
              margin: 25px 0;
              border-radius: 8px;
            }
            .highlight-box h3 {
              margin: 0 0 10px 0;
              color: #1B7A72;
              font-size: 18px;
            }
            .highlight-box p {
              margin: 0;
              color: #1f2937;
            }
            .company-details {
              background-color: #f9fafb;
              padding: 20px;
              border-radius: 8px;
              margin: 20px 0;
            }
            .company-details h4 {
              margin: 0 0 12px 0;
              color: #1f2937;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .company-details .detail {
              margin-bottom: 8px;
              color: #4b5563;
              font-size: 14px;
            }
            .company-details .detail strong {
              color: #1f2937;
              min-width: 120px;
              display: inline-block;
            }
            .timeline {
              background-color: #fffbeb;
              border-left: 4px solid #f59e0b;
              padding: 20px;
              margin: 25px 0;
              border-radius: 8px;
            }
            .timeline h3 {
              margin: 0 0 10px 0;
              color: #92400e;
              font-size: 16px;
            }
            .timeline ul {
              margin: 0;
              padding-left: 20px;
              color: #78350f;
            }
            .timeline li {
              margin-bottom: 6px;
            }
            .cta-button {
              display: inline-block;
              background-color: #1B7A72;
              color: white;
              padding: 14px 32px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              margin: 20px 0;
            }
            .signature {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
            }
            .signature p {
              margin: 5px 0;
            }
            .footer { 
              margin-top: 30px; 
              padding: 30px 20px;
              background-color: #f9fafb;
              text-align: center;
              font-size: 13px;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
            }
            .footer strong {
              color: #1f2937;
              display: block;
              margin-bottom: 8px;
            }
            .footer a {
              color: #1B7A72;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${fullName.split(" ")[0]}!</h1>
              <p style="margin: 0; opacity: 0.95;">We've received your founder interest form</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${fullName}</strong>,</p>
              
              <p>Thank you for expressing interest in partnering with Global Wonders. We've successfully received your submission for <strong>${companyName}</strong> and are excited to learn more about your ${finalSector} venture.</p>
              
              <div class="highlight-box">
                <h3>Your Submission</h3>
                <p>We've captured all the details about your funding needs and will review them carefully with our investment advisory team.</p>
              </div>

              <div class="company-details">
                <h4>Submission Summary</h4>
                <div class="detail"><strong>Company:</strong> ${companyName}</div>
                <div class="detail"><strong>Sector:</strong> ${finalSector}</div>
                <div class="detail"><strong>Funding Status:</strong> ${fundingStatus}</div>
                <div class="detail"><strong>Target Round:</strong> ${roundAndAmount}</div>
              </div>

              <div class="timeline">
                <h3>What Happens Next?</h3>
                <ul>
                  <li><strong>Within 48 hours:</strong> Our team will review your submission</li>
                  <li><strong>Next 3-5 days:</strong> We'll reach out via email or phone to discuss your needs</li>
                  <li><strong>If there's a fit:</strong> We'll schedule a detailed call to explore how we can help</li>
                </ul>
              </div>
              
              <p>In the meantime, you can explore our website to learn more about:</p>
              <ul style="color: #4b5563; line-height: 1.8; margin: 15px 0;">
                <li>Our network of 100+ VC funds and angel investors</li>
                <li>Comprehensive fundraising support services</li>
                <li>Success stories from founders we've helped</li>
                <li>Tailored deal structuring and M&A advisory</li>
              </ul>
              
              <p><strong>Need immediate assistance?</strong> Feel free to reach out to us directly:</p>
             <p style="color: #1B7A72; font-weight: 600;">
              📧 <a href="mailto:info@globalwonders.co" style="color:#1B7A72; text-decoration:none;">
                 info@globalwonders.co
  </a><br>
  📞 <a href="tel:+919867023591" style="color:#1B7A72; text-decoration:none;">
    +91 98670 23591
  </a>
</p>

              
              <div class="signature">
                <p style="margin-bottom: 5px; color: #1f2937;">Warm regards,</p>
                <p style="font-weight: 600; color: #1B7A72; font-size: 16px;">The Global Wonders Team</p>
                <p style="font-size: 14px; color: #6b7280; margin-top: 5px;">Connecting Smart Funds with Game-Changing Startups</p>
              </div>
            </div>
            
            <div class="footer">
              <strong>RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED</strong>
              <p>NO. 11 2ND FLOOR, DIVYA COMMERCIAL COMPLEX, NO. 37<br>
              Mumbai-400071, Maharashtra, India</p>
              <p>📧 <a href="mailto:info@globalwonders.co">info@globalwonders.co</a>
              📞 <a href="tel:+919867023591" style="color:#1B7A72; text-decoration:none;">
    +91 98670 23591
  </a>
              <p style="margin-top: 15px; font-size: 11px; color: #9ca3af;">
                This email was sent because you submitted a Founder Interest Form on our website.<br>
                © 2025 Global Wonders. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
        text: `
Dear ${fullName},

Thank you for expressing interest in partnering with Global Wonders. We've successfully received your submission for ${companyName} and are excited to learn more about your ${finalSector} venture.

SUBMISSION SUMMARY
------------------
Company: ${companyName}
Sector: ${finalSector}
Funding Status: ${fundingStatus}
Target Round: ${roundAndAmount}

WHAT HAPPENS NEXT?
------------------
• Within 48 hours: Our team will review your submission
• Next 3-5 days: We'll reach out via email or phone to discuss your needs
• If there's a fit: We'll schedule a detailed call to explore how we can help

Need immediate assistance?
Email: info@globalwonders.co

Warm regards,
The Global Wonders Team
Connecting Smart Funds with Game-Changing Startups

---
RAMAN GLOBALWONDERS CONSULTING PRIVATE LIMITED
NO. 11 2ND FLOOR, DIVYA COMMERCIAL COMPLEX, NO. 37
Mumbai-400071, Maharashtra, India
      `,
      });

    if (confirmationError) {
      console.error("Error sending confirmation email:", confirmationError);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      {
        message: "Form submitted successfully",
        notificationId: notificationData?.id,
        confirmationId: confirmationData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in founder interest API:", error);
    return NextResponse.json(
      { error: "Failed to process request", details: error.message },
      { status: 500 }
    );
  }
}
