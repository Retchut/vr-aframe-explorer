/* global AFRAME, THREE */

AFRAME.registerComponent("navmesh-constraint", {
	schema: {
		navmeshID: {
			default: "",
			type: "string",
		},
		height: {
			default: 1,
			type: "int",
		},
	},
	init: function () {
		// fetch navmesh html dom element and store its object3D accordingly
		const navmeshNode = document.querySelector(this.data.navmeshID);
		if (navmeshNode === null) {
			console.error(
				"No navmesh model was defined with id: " + this.data.navmeshID
			);
			this.navmeshModel = null;
		} else {
			this.navmeshModel = navmeshNode.object3D;
		}

		// initialize original position
		this.prevPosition = new THREE.Vector3();
		this.el.object3D.getWorldPosition(this.prevPosition);
	},
	tick: function () {
		if (this.navmeshModel === null) return;

		// setup constants
		const down = new THREE.Vector3(0, -1, 0);
		const raycaster = new THREE.Raycaster();
		let currPos = new THREE.Vector3();
		this.el.object3D.getWorldPosition(currPos);

		// check intersection with navmesh model using a downward-facing raycast
		raycaster.set(currPos, down);
		let intersection = [];
		raycaster.intersectObject(this.navmeshModel, true, intersection);

		// update previous valid position if we intersected (always at the same height from the "ground")
		if (intersection.length) {
			const newPos = new THREE.Vector3(
				currPos.x,
				intersection[0].point.y + this.data.height,
				currPos.z
			);
			this.el.object3D.position.copy(newPos);
			this.prevPosition.copy(newPos);
		}
		// if no collision was made, revert the constrained object to its previous valid position
		else {
			this.el.object3D.position.set(
				this.prevPosition.x,
				this.prevPosition.y,
				this.prevPosition.z
			);
		}
	},
});
