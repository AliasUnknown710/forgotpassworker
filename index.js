export default {
    async fetch(request, env, ctx) {
        if (request.method !== 'POST') {
            return new Response('Method Not Allowed', { status: 405 });
        }

        try {
            const { email } = await request.json();

            // Replace with your forgot password logic
            if (email && email === env.USER_EMAIL) {
                // Example: return a success message
                return new Response(JSON.stringify({ message: 'Password reset link sent.' }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            } else {
                return new Response('User not found', { status: 404 });
            }
        } catch (err) {
            return new Response('Bad Request', { status: 400 });
        }
    }
};