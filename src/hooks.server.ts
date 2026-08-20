import { redirect, type Handle } from '@sveltejs/kit';

const BLOCKED_BOT_REGEX = /ahrefsbot|semrushbot|dotbot|mj12bot|bytespider|gptbot|claudebot|ccbot|scrapy|python-requests|go-http-client|curl\/|wget\/|libwww-perl|zgrab|censys|nmap|sqlmap|nikto|masscan|eval|passthrough/i;

const EXPLOIT_PATH_REGEX = /\.(php|asp|aspx|jsp|cgi|env|git)$|xmlrpc|wp-admin|wp-content|wp-includes|wp-login|wp-json|\/2026\/|\/2025\/|\/2024\/|\/casino|\/kazino|\/1win|\/pin-up|\/wordpress|\/blog\/|\/admin|^\/\.env/i;

export const handle: Handle = async ({ event, resolve }) => {
	const pathname = event.url.pathname;
	const userAgent = event.request.headers.get('user-agent') || '';

	// 1. Block exploit paths at server layer
	if (EXPLOIT_PATH_REGEX.test(pathname)) {
		return new Response('403 Forbidden: Malicious path scan blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}

	// 2. Block malicious bots & empty user-agents
	if (!userAgent || BLOCKED_BOT_REGEX.test(userAgent)) {
		return new Response('403 Forbidden: Automated bot traffic blocked.', {
			status: 403,
			headers: {
				'Content-Type': 'text/plain',
				'Cache-Control': 'no-store, max-age=0'
			}
		});
	}

	// 3. Resolve response and inject OWASP defensive security headers
	const response = await resolve(event);

	// OWASP Security Hardening Headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
	response.headers.set('X-XSS-Protection', '1; mode=block');

	return response;
};
