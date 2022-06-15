<script>
	import '../app.css';
	import { Toasts } from 'as-toast';
</script>

<head>
	<title>Dhiraj Salunke | Portfolio</title>
	<meta
		name="description"
		content="I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"
	/>

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://dhiraj.homonovus.in/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Dhiraj Salunke | Portfolio" />
	<meta
		property="og:description"
		content="I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"
	/>
	<meta property="og:image" content="https://dhiraj.homonovus.in/developer.gif" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://dhiraj.homonovus.in/" />
	<meta name="twitter:title" content="Dhiraj Salunke | Portfolio" />
	<meta
		name="twitter:description"
		content="I am a full-stack web developer and flutter developer. Trying to contribute my share to make the world better place"
	/>
	<meta name="twitter:image" content="https://dhiraj.homonovus.in/developer.gif" />
</head>

<div>
	<a
		href="#contact"
		class="cursor-pointer z-10 hover:shadow-xl hover:bg-indigo-700 shadow-indigo-300 transition-all duration-300 fixed font-bold text-white bg-indigo-900 origin-top float-right mt-9 ml-9 w-72 text-center"
		style="transform:translateX(-50%) rotate(-45deg);"
	>
		<div class="">Hi!</div>
		<div class="">I'm open to interviews</div>
		<div class="">Click to get in touch</div>
	</a>
	<slot />
</div>
<Toasts --as-toast-border="none" />
