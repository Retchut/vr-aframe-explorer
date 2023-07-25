function HomeTemplate() {
	const head = ``;

	const html = `
		<h1>Welcome</h1>
		<h2>See the examples:</h2>
		<a href="/example/0">Test House</a>
		<br/>
		<br/>
		<a href="/example/1">Meeting Room</a>
		<br/>
		<br/>
		<a href="/example/2">Hall</a>
		<br/>
		<br/>
		<a href="/example/3">Auditorium (natural light, no decimation)</a>
		<br/>
		<br/>
		<a href="/example/4">Auditorium (natural light, decimated to 40%)</a>
		<br/>
		<br/>
		<a href="/example/5">Auditorium (natural light, decimated to 20%)</a>
		<br/>
		<br/>
		<a href="/example/6">Auditorium (natural light, decimated to 10%)</a>
		<br/>
		<br/>
		<a href="/example/7">Auditorium (natural light, decimated to 1%)</a>
		<br/>
		<h2>Or upload a model and choose your parameters (to be implemented, but try using "test.glb" and "test_navmesh.glb" along with any other parameters of your choice):</h2>
		<form method="GET" action="/viewer">
			<label for="model_src">model_src:</label>
			<input type="text" id="model_src" name="model_src">
			<br>
			<label for="nav_src">navmesh_src:</label>
			<input type="text" id="nav_src" name="nav_src">
			<br>
			<label for="scale">Model Scale:</label>
			<input type="text" id="scale" name="scale">
			<br>
			<label for="cam_height">Camera Height:</label>
			<input type="text" id="cam_height" name="cam_height">
			<br>
			<label for="cam_acceleration">Camera Acceleration:</label>
			<input type="text" id="cam_acceleration" name="cam_acceleration">
			<br>
			<h4>Spawnpoint:</h4>
			<label for="spawnpoint_x">x:</label>
			<input type="text" id="spawnpoint_x" name="spawnpoint_x">
			<label for="spawnpoint_y">y:</label>
			<input type="text" id="spawnpoint_y" name="spawnpoint_y">
			<label for="spawnpoint_z">z:</label>
			<input type="text" id="spawnpoint_z" name="spawnpoint_z">
			<br>
			<input type="submit" value="Submit"/>
		</form>
	`;

	return { head, html };
}

export default HomeTemplate;
