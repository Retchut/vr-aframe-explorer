function HomeTemplate() {
	const head = ``;

	const html = `
		<h1>Welcome</h1>
		<h2>See the examples:</h2>
		<a href="/example/0">Test House</a>
		<br/>
		<br/>
		<a href="/example/1">Meeting Room</a>
		<br/>
		<br/>
		<a href="/example/2">Hall</a>
	`;

	return { head, html };
}

export default HomeTemplate;
