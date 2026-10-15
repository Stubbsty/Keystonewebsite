import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");

const FROM_EMAIL = "noreply@keystonefacilityservices.com.au";
const FROM_NAME = "Keystone Facility Services";
const TO_EMAIL = "tyler.stubbs@keystonefacilityservices.com.au";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { firstName, lastName, company, phone, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!BREVO_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subject = `Website Enquiry — ${firstName} ${lastName}${company ? ` (${company})` : ""}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #0a2744; padding: 24px; margin-bottom: 24px;">
          <p style="color: #C9A84C; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px;">New Website Enquiry</p>
          <h1 style="color: white; font-size: 22px; margin: 0;">Keystone Facility Services</h1>
        </div>
        <div style="padding: 0 24px 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; font-weight: 600; color: #333;">${firstName} ${lastName}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; font-weight: 600; color: #333;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #333;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #555;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 13px; color: #333;"><a href="tel:${phone}" style="color: #C9A84C;">${phone}</a></td>
            </tr>` : ''}
          </table>
          <div style="margin-top: 24px;">
            <p style="font-size: 12px; color: #555; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">Message</p>
            <div style="background: #f5f5f5; padding: 16px; font-size: 14px; line-height: 1.7; color: #333; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #aaa;">Submitted via keystonefacilityservices.com.au. Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      </div>
    `;

    const brevoRes = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: TO_EMAIL }],
        replyTo: { email },
        subject,
        htmlContent: html,
      }),
    });

    if (!brevoRes.ok) {
      const errData = await brevoRes.json().catch(() => ({}));
      const errMsg = errData?.message || errData?.error || `Brevo API error (${brevoRes.status})`;
      return new Response(
        JSON.stringify({ error: errMsg }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
