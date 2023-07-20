/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

AFRAME.registerComponent("mesh-text", {
	schema: {
		content: {
			type: "string",
			default: "",
		},
		fontColor: {
			type: "string",
			default: "#FFF",
		},
		fontSize: {
			type: "float",
			default: 0.2,
		},
	},
	init: function () {
		this.text = new ThreeMeshUI.Text({
			content: this.data.content,
			fontColor: new THREE.Color(this.data.fontColor),
			fontSize: this.data.fontSize,
		});

		const parentEl = this.el.parentEl;
		if (parentEl === this.el.sceneEl) {
			this.el.object3D.add(this.text);
		} else {
			parentEl.addEventListener("loaded", () => {
				parentEl.components["mesh-block"].addToContainer(this.text, this.el.id);
			});
		}
	},
	tick: function () {
		ThreeMeshUI.update();
	},
});
