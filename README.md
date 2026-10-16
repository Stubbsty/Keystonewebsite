# Keystone Facility Services website

Static site plus one Vercel serverless function (`api/enquiry.js`) that emails quote requests through Brevo. No build step.

## Deploy (GitHub + Vercel)
1. Push this folder to a GitHub repo (files at the repo root, including the `api` folder).
2. Vercel → Add New → Project → import the repo. Framework preset: **Other**. Leave build command empty.
3. Settings → Domains → add `keystonefacilityservices.com.au` and follow the DNS steps.

## Quote form → email (Brevo)
1. **Brevo → Senders, Domains & Dedicated IPs → Domains:** authenticate `keystonefacilityservices.com.au` (add the DNS records Brevo gives you). This stops enquiries landing in spam.
2. **Brevo → Senders:** make sure the "from" address (e.g. `website@keystonefacilityservices.com.au`) is listed/verified.
3. **Brevo → SMTP & API → API keys:** create a key (starts with `xkeysib-`).
4. **Vercel → Project → Settings → Environment Variables**, add (Production):
   - `BREVO_API_KEY` = the key
   - `ENQUIRY_TO` = `tyler.stubbs@keystonefacilityservices.com.au`
   - `ENQUIRY_FROM` = `website@keystonefacilityservices.com.au`
5. Redeploy (Deployments → … → Redeploy) so the variables take effect.
6. Submit a test on the live site. If it fails you're sent back with an error message; check Vercel → Logs for the Brevo response.

Hitting reply on the enquiry email replies straight to the customer.

## Editing content
`_build.py` generates every page. Edit CONFIG or the copy, run `python3 _build.py .` here, then push.
