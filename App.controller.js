sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
  ],
  function (Controller, MessageToast, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("HelloWorld.App", {
      onInit: function () {
        var oModel = new sap.ui.model.json.JSONModel({
          animals: [
            {
              name: "Fox",
              favouriteFood: "chicken",
              color: "red",
              numberOfLegs: "4"
            },
            {
              name: "Pig",
              favouriteFood: "everything",
              color: "pink",
              numberOfLegs: "4"
            },
            {
              name: "Cat",
              favouriteFood: "mouse",
              color: "grey",
              numberOfLegs: "4"
            },
            {
              name: "Snake",
              favouriteFood: "mouse",
              color: "green",
              numberOfLegs: "0"
            }
          ]
        });
        this.getView().setModel(oModel);
      },
      onPress: function (oEvent) {
        this.getView().byId("FbBox").setSelectedKey("");
        this.getView().byId("Field").setValue("");
      },

      handleLiveChange: function (oEvent) {
        // build filter array

        var aFilter = [];
        var sQuery = oEvent.getParameter("query");

        if (sQuery) {
          aFilter.push(new Filter("name", FilterOperator.Contains, sQuery));
        }

        // filter binding
        var oList = this.getView().byId("tableId");
        var oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      }
    });
  }
);
