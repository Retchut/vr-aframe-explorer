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
		const navmeshNode = document.querySelector(this.data.navmeshID);
		if (navmeshNode === null) {
			console.error(
				"No navmesh model was defined with id: " + this.data.navmeshID
			);
			this.navmeshModel = null;
		} else {
			this.navmeshModel = navmeshNode.object3D;
		}
		this.prevPosition = new THREE.Vector3();
		this.el.object3D.getWorldPosition(this.prevPosition);
	},
	tick: function (time, timeDelta) {
		const down = new THREE.Vector3(0, -1, 0);
		const raycaster = new THREE.Raycaster();
		let currPos = new THREE.Vector3();
		this.el.object3D.getWorldPosition(currPos);

		// check intersection with navmesh model using a downward-facing raycast
		raycaster.set(currPos, down);
		let intersection = [];
		raycaster.intersectObject(this.navmeshModel, true, intersection);

		// update previous valid position if we intersected
		if (intersection.length) {
			console.log(intersection[0].point.y + this.data.height);
			const newPos = new THREE.Vector3(
				currPos.x,
				intersection[0].point.y + this.data.height,
				currPos.z
			);
			this.el.object3D.position.copy(newPos);
			// this.prevPosition = this.el.object3D.position;
			this.prevPosition.copy(newPos);
		}
		// if no collision was made, revert the constrained object to its previous position
		else {
			this.el.object3D.position.set(
				this.prevPosition.x,
				this.prevPosition.y,
				this.prevPosition.z
			);
		}
	},
	// const nextPosition = new THREE.Vector3();
	// const tempVec = new THREE.Vector3();
	// const scanPattern = [
	// 	[0, 1], // Default the next location
	// 	[0, 0.5], // Check that the path to that location was fine
	// 	[30, 0.4], // A little to the side shorter range
	// 	[-30, 0.4], // A little to the side shorter range
	// 	[60, 0.2], // Moderately to the side short range
	// 	[-60, 0.2], // Moderately to the side short range
	// 	[80, 0.06], // Perpendicular very short range
	// 	[-80, 0.06], // Perpendicular very short range
	// ];
	// const down = new THREE.Vector3(0, -1, 0);
	// const raycaster = new THREE.Raycaster();
	// const gravity = -1;
	// const maxYVelocity = 0.5;
	// const results = [];
	// let yVel = 0;
	// let firstTry = true;

	// return function tick(time, delta) {
	// 	if (this.data.enabled === false) return;
	// 	if (this.lastPosition === null) {
	// 		firstTry = true;
	// 		this.lastPosition = new THREE.Vector3();
	// 		this.xzOrigin.object3D.getWorldPosition(this.lastPosition);
	// 		if (this.data.xzOrigin)
	// 			this.lastPosition.y -= this.xzOrigin.object3D.position.y;
	// 	}

	// 	const el = this.el;
	// 	if (this.objects.length === 0) return;

	// 	this.xzOrigin.object3D.getWorldPosition(nextPosition);
	// 	if (this.data.xzOrigin)
	// 		nextPosition.y -= this.xzOrigin.object3D.position.y;
	// 	if (nextPosition.distanceTo(this.lastPosition) <= 0.01) return;

	// 	let didHit = false;
	// 	// So that it does not get stuck it takes as few samples around the user and finds the most appropriate
	// 	scanPatternLoop: for (const [angle, distance] of scanPattern) {
	// 		tempVec.subVectors(nextPosition, this.lastPosition);
	// 		tempVec.applyAxisAngle(down, (angle * Math.PI) / 180);
	// 		tempVec.multiplyScalar(distance);
	// 		tempVec.add(this.lastPosition);
	// 		tempVec.y += maxYVelocity;
	// 		tempVec.y -= this.data.height;
	// 		raycaster.set(tempVec, down);
	// 		raycaster.far =
	// 			this.data.fall > 0 ? this.data.fall + maxYVelocity : Infinity;
	// 		raycaster.intersectObjects(this.objects, true, results);

	// 		if (results.length) {
	// 			// If it hit something we want to avoid then ignore it and stop looking
	// 			for (const result of results) {
	// 				if (this.excludes.includes(result.object.el)) {
	// 					results.splice(0);
	// 					continue scanPatternLoop;
	// 				}
	// 			}
	// 			const hitPos = results[0].point;
	// 			results.splice(0);
	// 			hitPos.y += this.data.height;
	// 			if (nextPosition.y - (hitPos.y - yVel * 2) > 0.01) {
	// 				yVel += Math.max(gravity * delta * 0.001, -maxYVelocity);
	// 				hitPos.y = nextPosition.y + yVel;
	// 			} else {
	// 				yVel = 0;
	// 			}
	// 			tempVec.copy(hitPos);
	// 			this.xzOrigin.object3D.parent.worldToLocal(tempVec);
	// 			tempVec.sub(this.xzOrigin.object3D.position);
	// 			if (this.data.xzOrigin)
	// 				tempVec.y += this.xzOrigin.object3D.position.y;
	// 			this.el.object3D.position.add(tempVec);

	// 			this.lastPosition.copy(hitPos);
	// 			didHit = true;
	// 			break;
	// 		}
	// 	}

	// 	if (didHit) {
	// 		firstTry = false;
	// 	}

	// 	if (!firstTry && !didHit) {
	// 		this.el.object3D.position.copy(this.lastPosition);
	// 		this.el.object3D.parent.worldToLocal(this.el.object3D.position);
	// 	}
});
