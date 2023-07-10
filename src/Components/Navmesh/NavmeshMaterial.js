/* global AFRAME, THREE */

import { clamp } from "../../Utils/mathOps";
import { setMaterialProps } from "../../Utils/materialOps";

function varyNavmeshOpacity(variation) {
	const navmeshEl = document.getElementById("navmesh");
	const originalOpacity = navmeshEl.getAttribute("navmesh-material").opacity;
	const newOpacity = clamp(originalOpacity + variation, 0.0, 1.0);
	changeNavmeshOpacity(newOpacity);
}

function changeNavmeshOpacity(newOpacity) {
	console.log("setting");
	const navmeshEl = document.getElementById("navmesh");
	navmeshEl.setAttribute("navmesh-material", "opacity", newOpacity);
	const newAttr = navmeshEl.getAttribute("navmesh-material");
	setMaterialProps(navmeshEl, newAttr.color, newAttr.opacity);
}

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
		this.el.addEventListener("model-loaded", () =>
			setMaterialProps(this.el, this.data.color, this.data.opacity)
		);
	},
});

export { varyNavmeshOpacity, changeNavmeshOpacity };
