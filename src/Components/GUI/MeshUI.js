/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

// function initUI() {
// 	const container = new ThreeMeshUI.Block({
// 		width: 1.2,
// 		height: 0.7,
// 		padding: 0.2,
// 		fontFamily: "./public/fonts/Roboto/Roboto-msdf.json",
// 		fontTexture: "./public/fonts/Roboto/Roboto-msdf.png",
// 	});
// 	const text = new ThreeMeshUI.Text({
// 		content: "Some text to be displayed",
// 	});
// 	container.position.set(0, 0, 0);
// 	container.add(text);
// 	document.querySelector("a-scene").object3D.add(container);
// 	ThreeMeshUI.update();
// }

// export { initUI };

AFRAME.registerComponent("mesh-ui", {
	schema: {
		width: { type: "float", default: 1.0 },
		height: { type: "float", default: 1.0 },
		padding: { type: "float", default: 0.0 },
		fontFamilyFile: {
			type: "string",
			default: "./public/fonts/Roboto/Roboto-msdf.json",
		},
		fontTextureFile: {
			type: "string",
			default: "./public/fonts/Roboto/Roboto-msdf.png",
		},
		fontSize: {
			type: "float",
			default: 0.1,
		},
		fontColor: {
			type: "string",
			default: "#FFF",
		},
	},
	init: function () {
		this.container = new ThreeMeshUI.Block({
			width: this.data.width,
			height: this.data.height,
			padding: this.data.padding,
			fontFamily: this.data.fontFamilyFile,
			fontTexture: this.data.fontTextureFile,
		});
		const text = new ThreeMeshUI.Text({
			content: this.data.text,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});
		//-------------------

		// const interactiveRaycaster = new InteractiveRaycaster(
		// 	camera,
		// 	scene,
		// 	renderer,
		// 	vrControl
		// );
		// interactiveRaycaster.start();

		// const button = new ThreeMeshUI.Text({ textContent: "click me" });
		// scene.add(button);

		// interactiveRaycaster.addObject(button);

		// // Interaction from raycaster with button can now be retrieved as event
		// buttonPrevious.addEventListener("click", (event) => {
		// 	console.log("me clicked, me happy!", event);
		// });
		//-------------------

		this.container.add(text);
		this.el.object3D.add(this.container);
	},
	tick: function () {
		ThreeMeshUI.update();
	},
});
