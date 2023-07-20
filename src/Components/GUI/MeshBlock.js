/* global AFRAME, THREE */

import ThreeMeshUI from "three-mesh-ui";

AFRAME.registerComponent("mesh-block", {
	schema: {
		width: { type: "float", default: 1 },
		height: { type: "float", default: 1 },
		margin: { type: "float", default: 0.0 },
		padding: { type: "float", default: 0.0 },
		backgroundOpacity: { type: "float", default: 0.7 },
		fontFamily: { type: "string", default: "/fonts/Roboto/Roboto-msdf.json" },
		fontTexture: { type: "string", default: "/fonts/Roboto/Roboto-msdf.png" },
		justifyContent: { type: "string", default: "center" },
		contentDirection: { type: "string", default: "column" },
	},
	init: function () {
		this.container = new ThreeMeshUI.Block({
			width: this.data.width,
			height: this.data.height,
			margin: this.data.margin,
			padding: this.data.padding,
			backgroundOpacity: this.data.backgroundOpacity,
			fontFamily: this.data.fontFamily,
			fontTexture: this.data.fontTexture,
			justifyContent: this.data.justifyContent,
			contentDirection: this.data.contentDirection,
		});

		const parentEl = this.el.parentEl;
		if (parentEl === this.el.sceneEl) {
			this.el.object3D.add(this.container);
		} else {
			parentEl.addEventListener("loaded", () => {
				parentEl.components["mesh-block"].addToContainer(this.container);
			});
		}
	},
	tick: function () {
		ThreeMeshUI.update();
	},
	addToContainer: function (toAdd) {
		this.container.add(toAdd);
	},
});
