import Error404 from "./Templates/Error/404";
import HomeTemplate from "./Templates/Home/Home";
import ViewerTemplate from "./Templates/Viewer/Viewer";
import MissingExample from "./Templates/Error/MissingExample";

import examples from "./Data/examples.json";

const parseExample = (exampleID) => {
	return !isNaN(exampleID) ? parseInt(exampleID) : -1;
};

const exampleExists = (exampleID) => {
	return exampleID !== -1 && exampleID < examples.length;
};

const parseQueryParams = (query) => {
	const model_src = query["example"] ? `${examples[query["example"]].src}` : "";
	const nav_src = query["example"]
		? `${examples[query["example"]].nav_src}`
		: "";
	const scale = query["scale"] ?? 1;
	const cam_height = query["cam_height"] ?? 3;
	const spawnpoint = {
		x: query["spawnpoint_x"] ?? 0,
		y: query["spawnpoint_y"] ?? 0,
		z: query["spawnpoint_z"] ?? 0,
	};
	const cam_acceleration = query["cam_acceleration"] ?? 50;
	const panel_position = examples[query["example"]].panel_position;

	return {
		src: model_src,
		nav_src: nav_src,
		scale: scale,
		cam_height: cam_height,
		spawnpoint: spawnpoint,
		cam_acceleration: cam_acceleration,
		panel_position: panel_position,
	};
};

export function render(url, manifest, query) {
	let [baseurl, path] = url.split("/");
	baseurl = baseurl.split("?")[0];
	switch (baseurl) {
		case "":
			return HomeTemplate();
		case "example":
			const exampleID = parseExample(path);
			if (!exampleExists(exampleID)) return MissingExample();

			const exampleParams = examples[exampleID];
			return ViewerTemplate(exampleParams);
		case "viewer":
			const params = parseQueryParams(query);
			return ViewerTemplate(params);
		default:
			return Error404();
	}
}
