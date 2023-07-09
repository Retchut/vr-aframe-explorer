function setMaterialProps(el, color, opacity) {
	const mesh = el.getObject3D("mesh");
	// set material for all nodes in the mesh
	mesh.traverse((node) => {
		if (node.name !== "Scene") {
			node.material.color.set(color);
			node.material.transparent = true; // always transparent. Amount of transparency controlled by the opacity property
			node.material.opacity = opacity;
		}
	});
}

export { setMaterialProps };
