function appendAssetNodes(nodes) {
	const assetContainer = document.querySelector("a-assets");
	assetContainer.append(...nodes);
}

function appendSceneNodes(nodes) {
	const scene = document.querySelector("a-scene");
	scene.append(...nodes);
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

export { insertAssets, insertModel };
