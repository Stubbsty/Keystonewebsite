// Vercel serverless function: emails website enquiries via Brevo.
// Set these in Vercel → Project → Settings → Environment Variables:
//   BREVO_API_KEY   your Brevo API key (Brevo → SMTP & API → API keys)
//   ENQUIRY_TO      where enquiries go (e.g. tyler.stubbs@keystonefacilityservices.com.au)
//   ENQUIRY_FROM    a sender address verified in Brevo (e.g. website@keystonefacilityservices.com.au)

const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).send('Method not allowed'); }

  let f = req.body || {};
  if (typeof f === 'string') f = Object.fromEntries(new URLSearchParams(f));

  // spam trap: real people never fill this hidden field
  if (f['company-url']) return res.redirect(303, '/thank-you/');

  if (!f.name || !f.email || !f.phone) return res.redirect(303, '/book-a-walkthrough/?error=missing');

  const rows = [
    ['Name', f.name], ['Business', f.business], ['Email', f.email], ['Phone', f.phone],
    ['Site suburb', f.suburb], ['Type of space', f.sector], ['Approx. size', f.size],
    ['How often', f.frequency], ['Walkthrough time', f['walkthrough-time']], ['Notes', f.notes],
  ];
  const html = `<h2 style="font-family:Arial,sans-serif;color:#6D0101">New walkthrough request</h2>
<table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#6D0101"><b>${k}</b></td><td style="padding:6px 0">${esc(v) || '-'}</td></tr>`)
    .join('')}</table><p style="font-family:Arial,sans-serif;color:#888;font-size:12px">Sent from the Keystone website. Hit reply to answer ${esc(f.name)} directly.</p>`;

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Keystone website', email: process.env.ENQUIRY_FROM },
        to: [{ email: process.env.ENQUIRY_TO }],
        replyTo: { email: f.email, name: f.name },
        subject: `Walkthrough request: ${f.business || f.name} (${f.suburb || 'Brisbane'})`,
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('Brevo error', r.status, await r.text()); return res.redirect(303, '/book-a-walkthrough/?error=send'); }
    return res.redirect(303, '/thank-you/');
  } catch (e) {
    console.error(e);
    return res.redirect(303, '/book-a-walkthrough/?error=send');
  }
};
