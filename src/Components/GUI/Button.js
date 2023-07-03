AFRAME.registerComponent("button", {
	schema: {
		name: { type: "string", default: "unnamed" },
		action: { type: "string" },
	},
	init: function () {
		const action = this.data.action;

		// function we'll assign to this button's event listener
		let callback;
		switch (action) {
			default:
				console.log("The callback " + action + " has not been implemented");
		}
		this.el.addEventListener("click", callback);
	},
});
