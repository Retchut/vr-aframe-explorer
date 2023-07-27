const MODEL_ID = "model";
const NAVMESH_MODEL_ID = "navmesh-model";
const NAVMESH_EL_ID = "navmesh";

function Assets(src, nav_src) {
	let html = `
            <a-asset-item
                id=${MODEL_ID}
                src=${src}
            ></a-asset-item>
            <a-asset-item
                id=${NAVMESH_MODEL_ID}
                src=${nav_src}
            ></a-asset-item>
		`;

	return html;
}

function Models(scale) {
	const html = `
        <a-entity
            position="0 0 0"
            rotation="0 0 0"
			scale="${scale} ${scale} ${scale}"
            gltf-model="#${MODEL_ID}"
        ></a-entity>
        <a-entity
            id="${NAVMESH_EL_ID}"
            navmesh-material
            position="0.1 0.1 0.1"
            rotation="0 0 0"
			scale="${scale} ${scale} ${scale}"
            gltf-model="#${NAVMESH_MODEL_ID}"
        ></a-entity>
	`;

	return html;
}

function Camera(spawnpoint, cam_height, cam_acceleration, hasPointer) {
	const html = `
        <a-entity
            id="camera"
            camera
            movement-controls="fly: true;"
            look-controls
            wasd-controls="acceleration:${cam_acceleration}"
            position="${spawnpoint.x} ${spawnpoint.y} ${spawnpoint.z}"
            navmesh-constraint="navmeshID: #navmesh; height: ${cam_height}"
        >
			${
				hasPointer
					? `
            <a-entity
                cursor
                geometry="primitive: ring; radiusInner: 0.00005; radiusOuter: 0.0001"
                position="0 0 -0.01"
                material="color: gray; shader: flat"
            >
            </a-entity>
				  `
					: ""
			}
        </a-entity>
	`;

	return html;
}

function NavmeshUI(panel_position, scale) {
	const html = `
        <a-entity
            button="name: opacity decrease; action:nav-opacity-decrease"
			position="${panel_position.x - 0.01} ${panel_position.y - 0.5} ${
		panel_position.z - 1
	}"
	        rotation="-20 -90 0"
            geometry="primitive: plane"
            material="color: #F00"
        ></a-entity>

        <a-entity
            button="name: opacity increase; action:nav-opacity-increase"
			position="${panel_position.x - 0.01} ${panel_position.y - 0.5} ${
		panel_position.z + 1
	}"
	        rotation="-20 -90 0"
            geometry="primitive: plane"
            material="color: #00F"
        ></a-entity>

		<a-entity
			position="${panel_position.x} ${panel_position.y} ${panel_position.z}"
	        rotation="-20 -90 0"
			mesh-container
            mesh-block="width: 5; height: 4.5; padding: 0.2; backgroundOpacity: 0.2; justifyContent: start"
	  	>
			<!-- Title block -->
			<a-entity
				mesh-block="width: 2; height: 0.5; margin: 0.025; justifyContent: center;"
			>
				<a-entity mesh-text="content: Test UI"></a-entity>
			</a-entity>

			<!-- Content block -->
			<a-entity
				mesh-block="width: 0.5 height: 1; margin: 0.3; padding: 0.025; justifyContent: center; backgroundOpacity: 0"
			>
				<a-entity
					mesh-block="contentDirection: row; padding: 0.2; margin: 0.025; backgroundOpacity: 0"
				>
					<!-- Left block -->
					<a-entity
						mesh-block="width: 1.5; height: 1; margin: 0.3; padding: 0.025; justifyContent: center"
					>
						<a-entity
							mesh-block="width: 1.5; height: 1; textAlign: center; justifyContent: center;"
						>
							<a-entity mesh-text="content: decrease navmesh opacity;"> </a-entity>
						</a-entity>
					</a-entity>
		
					<!-- Right block -->
					<a-entity
						mesh-block="width: 1.5; height: 1; margin: 0.3; padding: 0.025; justifyContent: center"
					>
						<a-entity
							mesh-block="width: 1.5; height: 1; margin: 0.05; padding: 0.02; textAlign: center; justifyContent: center;"
						>
							<a-entity mesh-text="content: increase navmesh opacity;"> </a-entity>
						</a-entity>
					</a-entity>
				</a-entity>
			</a-entity>
		</a-entity>
    `;

	return html;
}

export { Assets, Models, Camera, NavmeshUI };
