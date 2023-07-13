function HomeTemplate() {
	const head = ``;

	const html = `
		<h1>home page</h1>
		<p>welcome!</p>
		<h2>See the examples:</h2>
		<a href="/example/0">Example 1</a>
		<a href="/example/1">Example 2</a>
		<a href="/example/2">Example 3</a>
		<a href="/example/3">Example 4</a>
		<br/>
		<p>PS: only the 1st example exists</p>
	`;

	return { head, html };
}

export default HomeTemplate;
