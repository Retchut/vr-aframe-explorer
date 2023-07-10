/* global AFRAME, THREE */

import {
	varyNavmeshOpacity,
	changeNavmeshOpacity,
} from "../Navmesh/NavmeshMaterial";

AFRAME.registerComponent("button", {
	schema: {
		name: { type: "string", default: "unnamed" },
		action: { type: "string" },
	},
	init: function () {
		const action = this.data.action;

		// function we'll assign to this button's event listener
		// add more string values and corresponding actions here
		let callback;
		switch (action) {
			case "nav-transparent":
				callback = () => varyNavmeshOpacity(-0.1);
				break;
			case "nav-opaque":
				callback = () => varyNavmeshOpacity(0.1);
				break;
			default:
				callback = () =>
					console.error("Callback has not been implemented: " + action);
		}
		this.el.addEventListener("click", callback);
	},
});
