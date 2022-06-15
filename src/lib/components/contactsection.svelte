<script>
	import mailer from '$lib/service/emailer';
	import { addToast } from 'as-toast';
	let name = '';
	let email = '';
	let message = '';
	function sendMail() {
		mailer({ name, email, message })
			.then((data) => {
				addToast('Your response has submitted.', 'info', 2000);
			})
			.catch((err) => {
				addToast('Error while sending response.', 'warn', 200);
			});
	}
</script>

<section id="contact" class="text-gray-600 body-font relative">
	<h1 class="text-slate-800 font-semibold text-4xl p-8 text-center">Your doorway to me!</h1>

	<div class="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
		<div
			class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
		>
			<div
				width="100%"
				height="100%"
				class="contact-bg absolute inset-0 bg-red-200"
				title="display"
				style="filter: grayscale(0.1) contrast(1.2) opacity(0.4);"
			/>
			<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
				<div class="lg:w-1/2 px-6">
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">FYI</h2>
					<p class="mt-1">
						With great power comes great responsibility, so don't spam these numbers.
					</p>
				</div>
				<div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
					<a href="mailto:dhirajraje113@gmail.com" class="text-indigo-900 leading-relaxed"
						>dhirajraje113@gmail.com</a
					>
					<h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
					<a href="tel:+919923454467" class="text-indigo-900 leading-relaxed">9923454467</a>
				</div>
			</div>
		</div>
		<div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
			<h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Get to me</h2>
			<p class="leading-relaxed mb-5 text-gray-600">contact me anywhere I'll respond ASAP!</p>
			<div class="relative mb-4">
				<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
				<input
					type="text"
					bind:value={name}
					id="name"
					name="name"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<input
					type="email"
					bind:value={email}
					id="email"
					name="email"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div class="relative mb-4">
				<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
				<textarea
					id="message"
					bind:value={message}
					name="message"
					class="w-full bg-white rounded border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<button
				on:click={(e) => {
					sendMail();
				}}
				class="items-center text-white hover:shadow-lg hover:shadow-indigo-300 bg-indigo-900 transition-all duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg"
				>Get in touch!</button
			>
			<p class="text-xs text-gray-900 mt-3">
				I'll be happy if you reach out to me. Always nice to meet cool people.
			</p>
		</div>
	</div>
</section>

<style>
	.contact-bg {
		background-image: url('/contact.gif');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
