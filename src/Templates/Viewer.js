function ViewerTemplate() {
	const head = html`
		<!-- <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script> -->
		<script src="https://aframe.io/releases/1.4.0/aframe.js"></script>
	`;

	const html = html`
		<a-scene>
			<!-- Assets -->
			<a-assets></a-assets>

			<a-sky color="#88c6eb"></a-sky>

			<!-- Debug -->
			<!-- <a-entity camera-debug></a-entity> -->
		</a-scene>
	`;

	return { head, html };
}

export default ViewerTemplate;
