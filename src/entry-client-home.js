function updateFieldValue(val, id) {
	document.getElementById(id).value = val;
}

const sliderInputIDs = [
	["scale", "scale_text"],
	["cam_height", "cam_height_text"],
	["cam_acceleration", "cam_acceleration_text"],
];

for (const [slider, numberInput] of sliderInputIDs) {
	document
		.getElementById(slider)
		.addEventListener("change", (e) =>
			updateFieldValue(e.target.value, numberInput)
		);
	document
		.getElementById(numberInput)
		.addEventListener("change", (e) =>
			updateFieldValue(e.target.value, slider)
		);
}
