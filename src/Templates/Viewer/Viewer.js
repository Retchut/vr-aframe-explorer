import { Assets, Models, Camera, TestUI } from "./SceneComponents";
import examples from "../../Data/examples.json";

import MissingExample from "../Error/MissingExample";

function ViewerTemplate(exampleNum) {
	// check if example exists
	if (exampleNum === -1 || exampleNum >= examples.length) {
		const head = "";
		const html = MissingExample();
		return { head, html };
	}

	const head = `
		<!-- <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script> -->
		<script src="https://aframe.io/releases/1.4.0/aframe.js"></script>
	`;

	const html = `
	<a-scene>
		<!-- Assets -->
		<a-assets>
		${Assets(examples[exampleNum])}
		</a-assets>

		<a-sky color="#88c6eb"></a-sky>

		<!-- Scene Camera (and optional pointer) -->
		${Camera(true)}

		<!-- Scene models (loaded in assets) -->
		${Models()}

		<!-- Simple test UI -->
		${TestUI()}

		<!-- Debug -->
		<!-- <a-entity camera-debug></a-entity> -->
	</a-scene>
	`;

	return { head, html };
}

export default ViewerTemplate;
