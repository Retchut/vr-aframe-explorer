const camera = document.querySelector("#camera");

// define a component we can later use in the html file
AFRAME.registerComponent("position-reader", {
	/**
	 * We use IIFE (immediately-invoked function expression) to only allocate one
	 * vector or euler and not re-create on every tick to save memory.
	 */
	init: function () {
		console.log("position reader loaded");
	},
	tick: (function () {
		let position = new THREE.Vector3();
		let quaternion = new THREE.Quaternion();

		return function () {
			// update position and rotation of the camera
			camera.object3D.getWorldPosition(position);
			camera.object3D.getWorldQuaternion(quaternion);

			// print data
			console.log(position);
			console.log(quaternion);
			console.log("-----------------------------");
		};
	})(),
});
