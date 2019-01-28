sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/ComponentContainer"
], function (JSONModel, XMLView, ResourceModel, ComponentContainer) {
	"use strict";
	sap.ui.getCore().attachInit(function () {
		new ComponentContainer({
			name: "sap.ui.demo.walkthrough",
			settings : {
				id : "walkthrough"
			}
		}).placeAt("content");

		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
		});
		sap.ui.getCore().setModel(oResourceModel, "i18n");

	});
});