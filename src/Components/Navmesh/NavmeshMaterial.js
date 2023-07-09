/* global AFRAME, THREE */

import { setMaterialProps } from "../../Utils/materialOps";

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

export { changeNavmeshOpacity };
