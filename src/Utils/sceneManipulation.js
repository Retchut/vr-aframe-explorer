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

export { insertCamera, insertAssets, insertModel };
