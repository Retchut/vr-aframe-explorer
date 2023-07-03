class Debug {
	static debugPosition = (obj, position, quaternion) => {
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
