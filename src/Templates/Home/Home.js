function HomeTemplate() {
	const head = `<script type="module" src="/src/entry-client-home.js"></script>`;

	const html = `
		<h1>Welcome</h1>
		<h2>Choose a prebuilt example:</h2>
		<a href="/example/0">House (Smaller)</a>
		<br/>
		<br/>
		<a href="/example/1">Meeting Room (LIDAR) (Smaller)</a>
		<br/>
		<br/>
		<a href="/example/2">Hall (LIDAR) (Smaller)</a>
		<br/>
		<br/>
		<a href="/example/3">Auditorium (LIDAR) (Smaller)</a>
		<br/>
		<br/>
		<a href="/example/4">Auditorium (natural light, decimated to 1%) (Smaller)</a>
		<br/>
		<br/>
		<a href="/example/5">Auditorium (natural light, decimated to 10%) (Medium)</a>
		<br/>
		<br/>
		<a href="/example/6">Auditorium (natural light, decimated to 20%) (Larger)</a>
		<br/>
		<br/>
		<a href="/example/7">Auditorium (natural light, decimated to 40%) (Larger)</a>
		<br/>
		<br />
		<a href="/example/8">Auditorium (natural light, no decimation) (Largest)</a>
		<br />
		<br />
		<h2>Or customize some scene parameters:</h2>
		<form method="GET" action="/viewer">
		<input type="radio" id="model_0" name="example" value="0" >
			<label for="model_0">House (Smaller)</label>
			<br>
			<input type="radio" id="model_1" name="example" value="1" >
			<label for="model_1">Meeting Room (LIDAR) (Smaller)</label>
			<br>
			<input type="radio" id="model_2" name="example" value="2" >
			<label for="model_2">Hall (LIDAR) (Smaller)</label>
			<br>
			<input type="radio" id="model_3" name="example" value="3" >
			<label for="model_3">Auditorium (LIDAR) (Smaller)</label>
			<br>
			<input type="radio" id="model_4" name="example" value="4" >
			<label for="model_4">Auditorium (natural light, decimated to 1%) (Smaller)</label>
			<br>
			<input type="radio" id="model_5" name="example" value="5" >
			<label for="model_5">Auditorium (natural light, decimated to 10%) (Medium)</label>
			<br>
			<input type="radio" id="model_6" name="example" value="6" >
			<label for="model_6">Auditorium (natural light, decimated to 20%) (Larger)</label>
			<br>
			<input type="radio" id="model_7" name="example" value="7" >
			<label for="model_7">Auditorium (natural light, decimated to 40%) (Larger)</label>
			<br>
			<input type="radio" id="model_8" name="example" value="8" >
			<label for="model_8">Auditorium (natural light, no decimation) (Largest)</label>
			<br>
			<div class="slider-select">
				<label for="scale">Model Scale:</label>
				<input type="range" value="1" min="1" max="5" id="scale" name="scale">
				<input type="number" value="1" min="1" max="5" id="scale_text">
			</div>
			<div class="slider-select">
				<label for="cam_height">Camera Height:</label>
				<input type="range" value="4" min="1" max="20" id="cam_height" name="cam_height">
				<input type="number" value="4" min="1" max="20" id="cam_height_text">
			</div>
			<div class="slider-select">
				<label for="cam_acceleration">Camera Acceleration:</label>
				<input type="range" value="100" min="1" max="200" id="cam_acceleration" name="cam_acceleration">
				<input type="number" value="100" min="1" max="200" id="cam_acceleration_text">
			</div>
			<h4>Camera spawnpoint:</h4>
			<label for="spawnpoint_x">x:</label>
			<input type="number" value="0" id="spawnpoint_x" name="spawnpoint_x">
			<label for="spawnpoint_y">y:</label>
			<input type="number" value="0" id="spawnpoint_y" name="spawnpoint_y">
			<label for="spawnpoint_z">z:</label>
			<input type="number" value="0" id="spawnpoint_z" name="spawnpoint_z">
			<br>
			<input type="submit" value="Submit"/>
		</form>
		<style>
			h2, h4 {
				margin: 0.5rem 0;
			}
			input[type=number]{
				text-align: center;
				max-width: 50px;
			}
			input[type=radio] {
				margin: 0.1rem auto;
			}
			input[type=submit] {
				margin: 0.5rem;
			}
			.slider-select {
				display:flex;
				align-items: center;
				padding-top: 0.5rem;
			}
		</style>
	`;

	return { head, html };
}

export default HomeTemplate;
