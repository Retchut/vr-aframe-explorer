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

export function render(url, manifest, query) {
	console.log(query);
	const [baseurl, path] = url.split("/");
	switch (baseurl) {
		case "":
			return HomeTemplate();
		case "example":
			const exampleID = parseExample(path);
			if (!exampleExists(exampleID)) return MissingExample();

			const exampleParams = examples[exampleID];
			return ViewerTemplate(exampleParams);
		default:
			return Error404();
	}
}
