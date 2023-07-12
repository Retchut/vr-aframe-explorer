function appendAssetNodes(nodes) {
	const assetContainer = document.querySelector("a-assets");
	assetContainer.append(...nodes);
}

function appendSceneNodes(nodes) {
	const scene = document.querySelector("a-scene");
	scene.append(...nodes);
	scene.flushToDOM();
}

function insertCamera(pointer) {
	const camera = document.createElement("a-entity");
	camera.setAttribute("id", "camera");
	camera.setAttribute("camera", "");
	camera.setAttribute("look-controls", "");
	camera.setAttribute("wasd-controls", "acceleration:100");
	camera.setAttribute("position", "0 4 0");
	camera.setAttribute("navmesh-constraint", "navmeshID: #navmesh; height: 4");

	if (pointer) {
		const pointerEl = document.createElement("a-entity");
		pointerEl.setAttribute("cursor", "");
		pointerEl.setAttribute(
			"geometry",
			"primitive: ring; radiusInner: 0.00005; radiusOuter: 0.0001"
		);
		pointerEl.setAttribute("position", "0 0 -0.01");
		pointerEl.setAttribute("material", "color: gray; shader: flat");
		camera.appendChild(pointerEl);
	}

	appendSceneNodes([camera]);
}

function insertAssets(modelID, modelPath, navmeshID, navmeshPath) {
	const modelEl = document.createElement("a-asset-item");
	modelEl.setAttribute("id", modelID);
	modelEl.setAttribute("src", modelPath);
	const navmeshModelEl = document.createElement("a-asset-item");
	navmeshModelEl.setAttribute("id", navmeshID);
	navmeshModelEl.setAttribute("src", navmeshPath);

	appendAssetNodes([modelEl, navmeshModelEl]);
}

function insertModel(modelID, navmeshID) {
	const modelEntity = document.createElement("a-entity");
	modelEntity.setAttribute("gltf-model", "#" + modelID);
	modelEntity.setAttribute("position", "0 0 0");
	modelEntity.setAttribute("rotation", "0 0 0");

	const navmeshModelEntity = document.createElement("a-entity");
	navmeshModelEntity.setAttribute("id", "navmesh");
	navmeshModelEntity.setAttribute("navmesh-material", "");
	navmeshModelEntity.setAttribute("gltf-model", "#" + navmeshID);
	navmeshModelEntity.setAttribute("position", "0 0 0");
	navmeshModelEntity.setAttribute("rotation", "0 0 0");

	appendSceneNodes([modelEntity, navmeshModelEntity]);
}

function insertTestUI() {
	const button1 = document.createElement("a-entity");
	button1.setAttribute(
		"button",
		"name: opacity decrease; action:nav-opacity-decrease"
	);
	button1.setAttribute("position", "24.99 4.5 1");
	button1.setAttribute("rotation", "-20 -90 0");
	button1.setAttribute("geometry", "primitive: plane");
	button1.setAttribute("material", "color: #F00");

	const button2 = document.createElement("a-entity");
	button2.setAttribute(
		"button",
		"name: opacity increase; action:nav-opacity-increase"
	);
	button2.setAttribute("position", "24.99 4.5 3");
	button2.setAttribute("rotation", "-20 -90 0");
	button2.setAttribute("geometry", "primitive: plane");
	button2.setAttribute("material", "color: #00F");

	const ui = document.createElement("a-entity");
	ui.setAttribute(
		"mesh-ui",
		"width: 5; height:4.5; padding: 0.2; fontSize: 0.2; text: Test UI; text2: decrease navmesh opacity; text3: increase navmesh opacity"
	);
	ui.setAttribute("position", "25 5 2");
	ui.setAttribute("rotation", "-20 -90 0");

	appendSceneNodes([ui, button1, button2]);
}

export { insertCamera, insertAssets, insertModel, insertTestUI };
