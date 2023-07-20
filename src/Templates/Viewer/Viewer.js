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

		<a-entity
			id="ui-parent"
			position="-1 5 -5"
			rotation="-20 0 0"
			mesh-block="width: 5; height: 4.5; padding: 0.2; fontSize: 0.2; backgroundOpacity: 0.2"
	  	>
			<!-- Title block -->
			<a-entity
				id="title-block"
				mesh-block="width: 2; height: 0.5; margin: 0.025; justify-content: center;"
			>
				<a-entity id="title-text" mesh-text="text: Test UI"></a-entity>
			</a-entity>
	
			<!-- Right block -->
			<a-entity
				id="right-block"
				mesh-block="width: 1.5; height: 1; margin: 0.025; padding: 0.025; justify-content: center"
			>
			</a-entity>
	
			<!-- Left block -->
			<a-entity
				id="left-block"
				mesh-block="width: 3.5; height: 1; margin: 0.025; padding: 0.025; justify-content: center"
			>
			</a-entity>
		</a-entity>

		<!-- Debug -->
		<!-- <a-entity camera-debug></a-entity> -->
	</a-scene>
	`;

	return { head, html };
}

export default ViewerTemplate;
