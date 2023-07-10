/* global AFRAME, THREE */

import { insertAssets, insertModel } from "./Utils/sceneManipulation";

import "./Components/Camera/CameraDebug";
import "./Components/GUI/Button";
import "./Components/Navmesh/NavmeshConstraint";
import "./Components/Navmesh/NavmeshMaterial";
import "./Components/GUI/MeshUI";

const MODEL_ID = "model",
	NAVMESH_ID = "navmesh-model";

insertAssets(
	MODEL_ID,
	"/models/autumn_house/scene.gltf",
	NAVMESH_ID,
	"/models/navmesh.glb"
);
insertModel(MODEL_ID, NAVMESH_ID);
