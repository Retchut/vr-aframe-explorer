import { Assets, Models, Camera, NavmeshUI } from "./SceneComponents";

function ViewerTemplate(viewerParams) {
	const { src, nav_src, scale, cam_height, spawnpoint, cam_acceleration } =
		viewerParams;

	const head = `
		<!-- <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script> -->
		<script src="https://aframe.io/releases/1.4.0/aframe.js"></script>
	`;

	const html = `
	<a-scene>
		<!-- Assets -->
		<a-assets>
		${Assets(src, nav_src)}
		</a-assets>

		<a-sky color="#88c6eb"></a-sky>

		<!-- Scene Camera (and optional pointer) -->
		${Camera(spawnpoint, cam_height, cam_acceleration, true)}

		<!-- Scene models (loaded in assets) -->
		${Models(scale)}

		<!-- Simple test UI -->
		${NavmeshUI()}

		<!-- Debug -->
		<!-- <a-entity camera-debug></a-entity> -->
	</a-scene>
	`;

	return { head, html };
}

export default ViewerTemplate;
