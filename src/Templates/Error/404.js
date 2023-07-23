function Error404() {
	const head = ``;
	const html = `
		<h1>404: Page not found</h1>
		<a href="/">Go back</a>
	`;

	return { html, head };
}

export default Error404;
