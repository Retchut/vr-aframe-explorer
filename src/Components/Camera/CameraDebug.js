/* global AFRAME, THREE */

import Debug from "../../Utils/debug";

const camera = document.querySelector("#camera");

// define a component we can later use in the html file
AFRAME.registerComponent("camera-debug", {
	/**
	 * We use IIFE (immediately-invoked function expression) to only allocate one
	 * vector or euler and not re-create on every tick to save memory.
	 */
	tick: (function () {
		// @ts-ignore
		let position = new THREE.Vector3();
		// @ts-ignore
		let quaternion = new THREE.Quaternion();

		return () => Debug.debugPosition(camera.object3D, position, quaternion);
	})(),
});
