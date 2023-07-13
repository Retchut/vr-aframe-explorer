import HomeTemplate from "./Templates/Home/Home";
import ViewerTemplate from "./Templates/Viewer/Viewer";

const parseExample = (exampleID) => {
	console.log(Number.isInteger(exampleID));
	return !isNaN(exampleID) ? parseInt(exampleID) : -1;
};

export function render(url, manifest) {
	const [baseurl, path] = url.split("/");
	switch (baseurl) {
		case "":
			return HomeTemplate();
		case "example":
			const exampleID = parseExample(path);
			return ViewerTemplate(exampleID);
		default:
			const html = "<h1>Error fetching page</h1>";
			return { html };
	}
}
