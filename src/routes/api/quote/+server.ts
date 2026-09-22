import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { Resend } from 'resend';

interface QuoteRequestBody {
	companyName: string;
	contactName: string;
	phone: string;
	email: string;
	serviceType: string;
	location: string;
	details?: string;
	honeypot?: string;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const body = (await request.json()) as QuoteRequestBody;

		const { companyName, contactName, phone, email, serviceType, location, details, honeypot } = body;

		// 1. Silent anti-bot honeypot check
		if (honeypot && honeypot.trim() !== '') {
			return json({ success: true, message: 'Request processed' }, { status: 200 });
		}

		// 2. Server-side validation
		if (!companyName?.trim() || !contactName?.trim() || !phone?.trim() || !email?.trim()) {
			return json({ error: 'Please complete all required fields.' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.trim())) {
			return json({ error: 'Please provide a valid email address.' }, { status: 400 });
		}

		// 3. Check Resend API configuration
		const apiKey = env.RESEND_API_KEY;
		if (!apiKey || apiKey === 're_your_api_key_here') {
			console.error('[Resend Error] RESEND_API_KEY is not configured or is still the placeholder.');
			return json(
				{
					error: 'Email service is not yet configured with a valid API key. Please configure RESEND_API_KEY in .env.'
				},
				{ status: 503 }
			);
		}

		const rawToEmail = env.FORM_TO_EMAIL;
		const toEmails = rawToEmail
			? rawToEmail
					.split(',')
					.map((addr) => addr.trim())
					.filter(Boolean)
			: [];

		if (toEmails.length === 0) {
			console.error('[Resend Error] FORM_TO_EMAIL is not configured in environment variables.');
			return json(
				{
					error: 'Recipient email configuration is missing. Please configure FORM_TO_EMAIL in .env.'
				},
				{ status: 503 }
			);
		}

		const fromEmail = env.FORM_FROM_EMAIL || 'Safe Hands Safety <quotes@safehandssafety.com>';

		const resend = new Resend(apiKey);
		const submissionTime = new Date().toLocaleString('en-US', {
			timeZone: 'America/Chicago',
			dateStyle: 'full',
			timeStyle: 'long'
		});

		let clientIp = 'Unknown';
		try {
			clientIp = getClientAddress();
		} catch {
			// Ignore if unavailable in certain environments
		}

		const cleanDetails = details?.trim() ? details.trim() : 'No additional details provided.';

		// 4. HTML Email Template
		const html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#18181b;">
	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5;padding:32px 16px;">
		<tr>
			<td align="center">
				<table role="presentation" width="100%" style="max-width:600px;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
					
					<!-- Header Bar -->
					<tr>
						<td style="background-color:#09090b;padding:24px 32px;border-bottom:3px solid #D22F25;">
							<div style="font-family:monospace;font-size:11px;color:#a1a1aa;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">
								SAFE HANDS SAFETY &bull; INTAKE DESK
							</div>
							<h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;letter-spacing:-0.5px;">
								New Quote Request
							</h1>
						</td>
					</tr>

					<!-- Content Section -->
					<tr>
						<td style="padding:32px;">
							
							<div style="background-color:#fafafa;border:1px solid #e4e4e7;border-left:4px solid #D22F25;padding:16px;margin-bottom:24px;">
								<div style="font-size:12px;color:#71717a;text-transform:uppercase;font-family:monospace;margin-bottom:4px;">Requested Service</div>
								<div style="font-size:16px;font-weight:700;color:#09090b;">${serviceType}</div>
							</div>

							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;border-collapse:collapse;">
								<tr>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;width:35%;color:#71717a;font-size:13px;font-weight:600;">Company Name:</td>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;font-size:14px;font-weight:600;color:#09090b;">${companyName}</td>
								</tr>
								<tr>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;">Contact Person:</td>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;font-size:14px;color:#09090b;">${contactName}</td>
								</tr>
								<tr>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;">Phone:</td>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;font-size:14px;">
										<a href="tel:${phone}" style="color:#D22F25;text-decoration:none;font-weight:600;">${phone}</a>
									</td>
								</tr>
								<tr>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;">Email Address:</td>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;font-size:14px;">
										<a href="mailto:${email}" style="color:#D22F25;text-decoration:none;">${email}</a>
									</td>
								</tr>
								<tr>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;color:#71717a;font-size:13px;font-weight:600;">Location / Hub:</td>
									<td style="padding:10px 0;border-bottom:1px solid #f4f4f5;font-size:14px;color:#09090b;">${location}</td>
								</tr>
							</table>

							<!-- Scope & Notes -->
							<div style="margin-top:20px;">
								<div style="font-size:12px;font-weight:700;text-transform:uppercase;color:#71717a;font-family:monospace;margin-bottom:8px;">Scope / Notes:</div>
								<div style="background-color:#f4f4f5;padding:16px;border-radius:4px;font-size:14px;line-height:1.6;color:#27272a;white-space:pre-wrap;">${cleanDetails}</div>
							</div>

							<!-- Action Button -->
							<div style="margin-top:28px;text-align:center;">
								<a href="mailto:${email}?subject=Safe%20Hands%20Safety%20-%20Quote%20Follow-up%20(${encodeURIComponent(companyName)})" style="display:inline-block;background-color:#09090b;color:#ffffff;text-decoration:none;padding:12px 24px;font-size:13px;font-weight:600;border-radius:3px;text-transform:uppercase;letter-spacing:0.5px;">
									Reply to Client (${contactName})
								</a>
							</div>

						</td>
					</tr>

					<!-- Footer Metadata -->
					<tr>
						<td style="background-color:#fafafa;padding:16px 32px;border-top:1px solid #e4e4e7;font-size:11px;color:#a1a1aa;font-family:monospace;">
							<div>Submitted: ${submissionTime} (Central Time)</div>
							<div>Origin IP: ${clientIp}</div>
						</td>
					</tr>

				</table>
			</td>
		</tr>
	</table>
</body>
</html>
		`.trim();

		// 5. Plain Text Fallback
		const text = `
NEW QUOTE REQUEST - SAFE HANDS SAFETY
=====================================

Service Requested: ${serviceType}
Location: ${location}

Company: ${companyName}
Contact Person: ${contactName}
Phone: ${phone}
Email: ${email}

Scope Details:
${cleanDetails}

-------------------------------------
Submitted at: ${submissionTime}
IP Address: ${clientIp}
		`.trim();

		// 6. Send email via Resend
		const { data, error } = await resend.emails.send({
			from: fromEmail,
			to: toEmails,
			replyTo: email,
			subject: `[Quote Request] ${serviceType} - ${companyName}`,
			html,
			text
		});

		if (error) {
			console.error('[Resend API Error]', error);
			return json(
				{ error: error.message || 'Failed to dispatch email via Resend service.' },
				{ status: 500 }
			);
		}

		return json({ success: true, message: 'Quote request transmitted successfully', id: data?.id });
	} catch (err: unknown) {
		console.error('[Quote API Error]', err);
		const message = err instanceof Error ? err.message : 'Internal server error while processing quote.';
		return json({ error: message }, { status: 500 });
	}
};
