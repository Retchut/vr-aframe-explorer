/* global AFRAME, THREE */

AFRAME.registerComponent("navmesh-material", {
	schema: {
		opacity: {
			default: 0.0,
			type: "float",
		},
		color: {
			default: "#6bb7cf",
			type: "string", // because the color type doesn't do any parsing, so it's functionally equivalent to a string
		},
	},
	init: function () {
		// wait for model to load
		this.el.addEventListener("model-loaded", () => {
			const mesh = this.el.getObject3D("mesh");
			// set material for all nodes in the mesh
			mesh.traverse((node) => {
				if (node.name !== "Scene") {
					node.material.color.set(this.data.color);
					node.material.transparent = true; // always transparent. Amount of transparency controlled by the opacity property
					node.material.opacity = this.data.opacity;
				}
			});
		});
	},
});
