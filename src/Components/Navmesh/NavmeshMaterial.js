/* global AFRAME, THREE */

import { clamp } from "../../Utils/mathOps";
import { setMaterialProps } from "../../Utils/materialOps";

function varyNavmeshOpacity(variation) {
	const navmeshEl = document.getElementById("navmesh");
	const originalOpacity = navmeshEl.getAttribute("navmesh-material").opacity;
	const newOpacity = clamp(originalOpacity + variation, 0.0, 1.0);
	navmeshEl.setAttribute("navmesh-material", "opacity", newOpacity);
}

AFRAME.registerComponent("navmesh-material", {
	schema: {
		opacity: {
			default: 0.0,
			type: "float",
		},
		color: {
			default: "#c4809f",
			type: "string", // because the color type doesn't do any parsing, so it's functionally equivalent to a string
		},
	},
	init: function () {
		// wait for model to load
		this.el.addEventListener("model-loaded", () => {
			setMaterialProps(this.el, this.data.color, this.data.opacity);
			this.loaded = true;
		});
	},
	update: function () {
		if (this.loaded) {
			setMaterialProps(this.el, this.data.color, this.data.opacity);
		}
	},
});

export { varyNavmeshOpacity };
