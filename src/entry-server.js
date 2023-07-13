import Error404 from "./Templates/Error/404";
import HomeTemplate from "./Templates/Home/Home";
import ViewerTemplate from "./Templates/Viewer/Viewer";

const parseExample = (exampleID) => {
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
			const html = Error404();
			return { html };
	}
}
