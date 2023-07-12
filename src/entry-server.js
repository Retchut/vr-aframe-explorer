export function render() {
	const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>VR A-Frame Explorer</title>
            <script src="https://aframe.io/releases/1.4.0/aframe.min.js"></script>
        </head>
        <body>
            <a-scene>
                <!-- Assets -->
                <a-assets>
                    <a-asset-item
                        id="house-model"
                        src="/models/autumn_house/scene.gltf"
                    ></a-asset-item>
                    <a-asset-item
                        id="navmesh-model"
                        src="/models/navmesh.glb"
                    ></a-asset-item>
                </a-assets>
    
                <!-- Camera with cursor child -->
                <a-entity
                    id="camera"
                    camera
                    movement-controls="fly: true;"
                    look-controls
                    wasd-controls="acceleration:100"
                    position="0 4 0"
                    navmesh-constraint="navmeshID: #navmesh; height: 4"
                >
                    <a-entity
                        cursor
                        geometry="primitive: ring; radiusInner: 0.00005; radiusOuter: 0.0001"
                        position="0 0 -0.01"
                        material="color: gray; shader: flat"
                    >
                    </a-entity>
                </a-entity>
    
                <a-sky color="#88c6eb"></a-sky>
    
                <a-entity
                    button="name: opacity decrease; action:nav-opacity-decrease"
                    position="24.99 4.5 1"
                    rotation="-20 -90 0"
                    geometry="primitive: plane"
                    material="color: #F00"
                ></a-entity>
    
                <a-entity
                    button="name: opacity increase; action:nav-opacity-increase"
                    position="24.99 4.5 3"
                    rotation="-20 -90 0"
                    geometry="primitive: plane"
                    material="color: #00F"
                ></a-entity>
    
                <a-entity
                    mesh-ui="width: 5; height:4.5; padding: 0.2; fontSize: 0.2; text: Test UI; text2: decrease navmesh opacity; text3: increase navmesh opacity"
                    position="25 5 2"
                    rotation="-20 -90 0"
                ></a-entity>
    
                <!-- Scene model -->
                <a-entity
                    position="0 0 0"
                    rotation="0 0 0"
                    gltf-model="#house-model"
                ></a-entity>
                <a-entity
                    id="navmesh"
                    navmesh-material
                    position="0 0 0"
                    rotation="0 0 0"
                    gltf-model="#navmesh-model"
                ></a-entity>
    
                <!-- Debug -->
                <!-- <a-entity camera-debug></a-entity> -->
            </a-scene>
        </body>
    </html>
    
  `;
	return { html };
}
