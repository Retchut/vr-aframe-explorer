class Debug {
	static debugPosition = (
		obj: THREE.Object3D,
		position: THREE.Vector3,
		quaternion: THREE.Quaternion
	): void => {
		// update position and rotation of the camera
		obj.getWorldPosition(position);
		obj.getWorldQuaternion(quaternion);

		// print data
		console.log(position);
		console.log(quaternion);
		console.log("-----------------------------");
	};
}

export default Debug;
