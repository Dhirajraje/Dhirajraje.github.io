export default async function mailer(body: any) {
	var request = {
		...body,
		_subject: 'Email form from your portfolio.',
		_template: 'table',
		_autoresponse: "Thanks for reaching to Dhiraj Salunke, He'll get back to you very soon."
	};
	return await fetch('https://formsubmit.co/ajax/dhirajraje113@gmail.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(request)
	});
}
