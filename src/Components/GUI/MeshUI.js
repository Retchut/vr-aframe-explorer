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
		const container = new ThreeMeshUI.Block({
			width: this.data.width,
			height: this.data.height,
			padding: this.data.padding,
			fontFamily: this.data.fontFamilyFile,
			fontTexture: this.data.fontTextureFile,
			justifyContent: "start",
			backgroundOpacity: 0.2,
		});
		this.el.object3D.add(container);

		//

		const titleBlock = new ThreeMeshUI.Block({
			height: 0.5,
			width: this.data.width - 3,
			margin: 0.025,
			justifyContent: "center",
		});

		const title = new ThreeMeshUI.Text({
			content: this.data.text,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});

		titleBlock.add(title);

		container.add(titleBlock);

		// left
		const leftblock = new ThreeMeshUI.Block({
			height: 1,
			width: this.data.width / 2 - 1,
			margin: 0.025,
			padding: 0.025,
			justifyContent: "center",
		});

		const leftTextBlock = new ThreeMeshUI.Block({
			height: 1,
			width: 1.5,
			textAlign: "center",
			justifyContent: "center",
		});

		const text2 = new ThreeMeshUI.Text({
			content: this.data.text2,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});

		leftTextBlock.add(text2);
		leftblock.add(leftTextBlock);

		//

		const rightBlock = new ThreeMeshUI.Block({
			height: 1,
			width: this.data.width / 2 - 1,
			margin: 0.025,
			padding: 0.025,
			justifyContent: "center",
		});

		const rightTextBlock = new ThreeMeshUI.Block({
			height: 1,
			width: 1.5,
			margin: 0.05,
			padding: 0.02,
			textAlign: "center",
			justifyContent: "center",
		});
		const text3 = new ThreeMeshUI.Text({
			content: this.data.text3,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});

		rightTextBlock.add(text3);

		rightBlock.add(rightTextBlock);

		const middleBlock = new ThreeMeshUI.Block({
			height: 1,
			width: this.data.width / 10,
			margin: 0.025,
			padding: 0.025,
			justifyContent: "center",
			backgroundOpacity: 0,
		});

		const contentContainer = new ThreeMeshUI.Block({
			contentDirection: "row",
			padding: 0.2,
			margin: 0.025,
			backgroundOpacity: 0,
		});

		contentContainer.add(leftblock, middleBlock, rightBlock);
		container.add(contentContainer);
	},
	tick: function () {
		ThreeMeshUI.update();
	},
});
