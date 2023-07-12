import HomeTemplate from "./Templates/Home";
import ViewerTemplate from "./Templates/Viewer";

export function render(url, manifest) {
	switch (url) {
		case "":
			console.log("home");
			return HomeTemplate();
		case "viewer":
			console.log("viewer");
			return ViewerTemplate();
	}

	return { html };
}
