addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    let data;
    try {
        data = await request.json();
    } catch {
        return new Response('Invalid JSON', { status: 400 });
    }

    const { email } = data;
    if (!email || typeof email !== 'string') {
        return new Response('Invalid email', { status: 400 });
    }

    // Call backend API to check if email exists
    const apiUrl = 'https://your-backend-api.com/check-email';
    let apiResponse;
    try {
        apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
    } catch {
        return new Response('Backend API error', { status: 502 });
    }

    if (!apiResponse.ok) {
        return new Response('Error checking email', { status: 500 });
    }

    const apiResult = await apiResponse.json();
    if (!apiResult.exists) {
        // For security, don't reveal if email exists or not
        return new Response('If the email exists, a reset link will be sent.', { status: 200 });
    }

    // Generate a password reset token (should be done securely in backend)
    const resetToken = apiResult.resetToken; // Assume backend returns a token

    // Send email via email API (e.g., SendGrid, Mailgun, etc.)
    const sendEmailUrl = 'https://your-email-api.com/send';
    const resetLink = `https://your-app.com/reset-password?token=${encodeURIComponent(resetToken)}`;
    const emailBody = `Click the following link to reset your password: ${resetLink}`;

    try {
        await fetch(sendEmailUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: email,
                subject: 'Password Reset',
                text: emailBody
            })
        });
    } catch {
        // Don't reveal email sending errors
    }

    return new Response('If the email exists, a reset link will be sent.', { status: 200 });
}