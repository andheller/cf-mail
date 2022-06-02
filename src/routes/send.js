async function send(req) {
	const email = import.meta.env.VITE_EMAIL;

	send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: email, name: 'Worker' }]
				}
			],
			from: {
				email: 'sender@cf-mail.pages.dev',
				name: 'Workers - MailChannels integration'
			},
			subject: 'Look! No servers',
			content: [
				{
					type: 'text/plain',
					value: req
				}
			]
		})
	});
	const send_response = await fetch(send_request);
	if (send_response.ok) return await send_response.json();

	return send_response.statusText;
}

export async function get() {
	const res = await send('hello');
	return { body: res };
}

export async function post({ request }) {
	const res = await request.json();
	const message = `First name: ${res.fname} \nLast name: ${res.lname} \nEmail: ${res.email} \nMessage: ${res.message}`;

	const send_request = await send(message);

	return { body: send_request };
}
