function HomeTemplate() {
	const head = html``;

	const html = html`
		<h1>home page</h1>
		<p>welcome!</p>
		<a href="/viewer">Go to viewer</a>
	`;

	return { head, html };
}

export default HomeTemplate;
