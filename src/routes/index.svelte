<script>
	async function handleSubmit() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		const body = {
			fname,
			lname,
			email,
			message
		};
		const options = {
			method: 'POST',
			headers,
			mode: 'cors',
			body: JSON.stringify(body)
		};
		formSubmit = await fetch('/send', options);
		console.log(formSubmit);
		console.log(JSON.stringify(body));
	}
	let fname, lname, email, message, formSubmit;
</script>

<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
	<div class="relative max-w-xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
				Cloudflare Mail
			</h2>
			<p class="mt-4 text-lg leading-6 text-slate-500">
				Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet.
				Sapien tortor lacus arcu.
			</p>
		</div>
		<div class="mt-12">
			<form
				on:submit|preventDefault={handleSubmit}
				method="POST"
				class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
			>
				<div>
					<label for="first-name" class="block text-sm font-medium text-slate-700">First name</label
					>
					<div class="mt-1">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							bind:value={fname}
							class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>
				<div>
					<label for="last-name" class="block text-sm font-medium text-slate-700">Last name</label>
					<div class="mt-1">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							bind:value={lname}
							class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="email" class="block text-sm font-medium text-slate-700">Email</label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							bind:value={email}
							class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-slate-300 rounded-md"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="message" class="block text-sm font-medium text-slate-700">Message</label>
					<div class="mt-1">
						<textarea
							id="message"
							name="message"
							rows="4"
							bind:value={message}
							class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border border-slate-300 rounded-md"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					{#if formSubmit}
						{#await formSubmit}
							<p>...Sending</p>
						{:then}
							<button
								type="submit"
								disabled
								class="text-orange-800 bg-orange-50 block w-full py-3 text-center rounded font-semibold shadow focus:outline-none focus-visible:underline lg:text-base"
								>Question Sent!</button
							>
						{/await}
					{:else}
						<button
							type="submit"
							class="text-white bg-orange-600 hover:bg-orange-500 hover:border-orange-300 border-t border-orange-500' block w-full py-3 text-center rounded font-semibold shadow focus:outline-none focus-visible:underline lg:text-base"
							>Send your message</button
						>
					{/if}
				</div>
			</form>
			{#if formSubmit}
				<p class="mt-4 text-xl leading-6 text-slate-600 text-center">
					Great, we got your question! <br />
					With any luck we may have an answer for you!
				</p>
			{/if}
		</div>
	</div>
</div>
