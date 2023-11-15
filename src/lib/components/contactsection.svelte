<script>
	import mailer from '$lib/service/emailer';
	import { addToast } from 'as-toast';
	let name = '';
	let email = '';
	let message = '';
	let actionPending = false;
	function sendMail() {
		actionPending = true;
		mailer({ name, email, message })
			.then((data) => {
				email = '';
				message = '';
				name = '';
				addToast('Your response has submitted.', 'info', 2000);
			})
			.catch((err) => {
				addToast('Error while sending response.', 'warn', 2000);
			})
			.finally(() => {
				actionPending = false;
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
			<p class="leading-relaxed mb-5 text-gray-600">Contact me! I'll respond ASAP!</p>
			<div class="relative mb-4">
				<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
				<div class="relative w-full flex-shrink-0">
					<input
						type="text"
						id="name"
						bind:value={name}
						disabled={actionPending}
						name="name"
						class="w-full rounded-md border border-gray-200 py-3 px-4 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
						placeholder="John Doe"
					/>
					<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div class="relative mb-4">
				<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
				<div class="relative w-full flex-shrink-0">
					<input
						type="text"
						id="email"
						bind:value={email}
						disabled={actionPending}
						name="email"
						class="w-full rounded-md border border-gray-200 py-3 px-4 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
						placeholder="john.doe@email.com"
					/>
					<div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-6 h-6"
						>
							<path
								fill-rule="evenodd"
								d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div class="relative mb-4">
				<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
				<textarea
					id="message"
					bind:value={message}
					name="message"
					disabled={actionPending}
					placeholder="Type your message here . . ."
					class="w-full rounded-md border border-gray-200 py-3 px-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
				/>
			</div>
			<button
				disabled={actionPending}
				on:click={_=>{
					sendMail()
				}}
				class="relative disabled:grayscale mt-4 rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1"
			>
				<div
					class="-scale-x-100 absolute left-0 -bottom-10 inline-flex h-10 w-10 -rotate-12 text-blue-700"
				>
					<svg viewBox="0 0 82 35" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M0 21.3963C0.189514 19.1422 0.475057 16.717 0.554355 14.2852C0.582363 13.435 0.32301 12.6326 1.24839 12.1517C1.43863 12.053 1.7169 11.8956 1.85767 11.9661C4.2446 13.1626 6.90906 13.1934 9.41312 13.8814C11.09 14.3423 12.6519 15.089 13.7134 16.5797C13.9251 16.8774 13.9105 17.3427 14 17.7305C13.6228 17.8077 13.2227 18.01 12.8727 17.9421C10.3283 17.4477 7.78825 16.9245 5.25946 16.353C4.46612 16.1737 4.32244 16.4862 4.22859 17.1961C4.0118 18.8342 3.66769 20.4541 3.43198 22.0899C3.33086 22.7891 3.36905 23.509 3.35123 24.2197C3.34977 24.2791 3.44107 24.3474 3.43052 24.3989C3.32213 24.9318 3.2712 25.8796 3.07114 25.9142C2.49387 26.0144 1.77655 25.8915 1.25603 25.5961C-0.352473 24.6832 0.143681 23.0129 0 21.3963Z"
							fill="currentColor"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M33.9279 29.9296C33.9687 30.0252 34.0103 30.1211 34.0512 30.2167L36.776 28.708C36.7189 28.6018 36.6613 28.4961 36.6041 28.3903C35.7123 28.9033 34.8197 29.4166 33.9279 29.9296ZM55.213 27.9357C55.2513 28.0076 55.2895 28.0795 55.3278 28.1513C56.8382 27.5018 58.3486 26.8518 59.8593 26.2019C59.8129 26.092 59.7661 25.9821 59.7197 25.8726C58.2175 26.5602 56.7153 27.2481 55.213 27.9357ZM40.7384 18.9565C40.5279 17.8215 40.3393 16.6815 40.0998 15.5525C39.952 14.8551 39.5106 14.6711 38.8099 14.825C36.6153 15.3082 34.9909 17.2686 34.7963 19.6189C34.584 22.1806 36.0472 23.7605 37.8517 25.1395C37.9927 25.2475 38.5155 25.0604 38.6986 24.8591C40.2045 23.1998 40.6396 21.163 40.7384 18.9565ZM47.8846 27.7513C53.9169 27.9699 58.9887 25.6539 63.5351 21.8258C68.7108 17.4677 72.7252 12.1435 76.2413 6.39113C77.3061 4.64903 78.3271 2.87833 79.4328 1.16371C79.7291 0.70344 80.2137 0.234515 80.706 0.0824723C81.0457 -0.0225277 81.5473 0.410268 81.9765 0.603333C81.8444 0.859247 81.7237 1.12306 81.5774 1.37032C81.1827 2.03645 80.7194 2.66758 80.3867 3.36306C79.3033 5.6264 78.3041 7.93113 77.1981 10.1824C76.4525 11.6998 75.639 13.1905 74.7457 14.6225C74.1814 15.5269 73.3694 16.269 72.7471 17.1414C71.7606 18.5237 70.9604 20.0611 69.8622 21.3395C68.1531 23.33 66.4111 25.3434 64.4139 27.0174C59.9989 30.718 54.9038 32.5263 49.0801 32.1605C46.3701 31.9904 43.6835 31.9283 41.122 30.8655C40.842 30.7492 40.3185 30.9333 40.0448 31.1527C37.2899 33.3656 34.1239 34.5277 30.6632 34.7456C28.0734 34.909 25.4198 35.1171 22.8828 34.7219C20.7546 34.3908 18.675 33.3742 16.7198 32.3694C14.9819 31.4756 13.3686 30.2773 11.8348 29.0418C9.65017 27.2812 8.09522 24.9795 7.06601 22.3556C6.91824 21.9789 7.17257 21.2819 7.46774 20.9267C7.79559 20.5315 8.26675 20.7212 8.80326 20.9647C10.4826 21.7271 11.1635 23.3172 12.0776 24.6916C13.809 27.2959 16.297 28.8333 19.144 29.6515C24.0015 31.0477 28.8342 30.4606 33.5239 28.7422C36.0572 27.8134 36.0323 27.708 34.1863 25.8643C31.7566 23.438 30.4122 20.5417 30.5982 17.0518C30.8143 13.0012 34.1347 10.1538 38.1338 10.4515C39.3892 10.5452 40.2439 11.3239 41.0648 12.1255C42.9294 13.9466 43.9712 16.2194 44.3347 18.7977C44.7112 21.4648 44.7806 24.1113 43.5286 26.6189C43.2264 27.2244 43.5171 27.489 44.1483 27.5187C45.3947 27.5778 46.6393 27.6719 47.8846 27.7513Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				{#if actionPending}
					<div class="rounded-full mx-auto w-6 h-6 bg-white animate-ping"></div>
				{/if}
				{#if !actionPending}
					Contact me!
				{/if}
			</button>
			<p class="text-xs pt-6 text-gray-900 mt-3">
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
