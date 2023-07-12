import HomeTemplate from "./Templates/Home/Home";
import ViewerTemplate from "./Templates/Viewer/Viewer";

export function render(url, manifest) {
	switch (url) {
		case "":
			return HomeTemplate();
		case "viewer":
			return ViewerTemplate(0);
		default:
			const html = "<h1>Error fetching page</h1>";
			return { html };
	}
}
