sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheRequisitionsList.iSeeThisPage();
            Then.onTheRequisitionsList.onTable().iCheckColumns(5, {"title":{"header":"Title"},"status":{"header":"Status"},"totalAmount":{"header":"Total Amount"},"currency":{"header":"Currency"},"createdAt":{"header":"Date Created"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheRequisitionsList.onFilterBar().iExecuteSearch();
            
            Then.onTheRequisitionsList.onTable().iCheckRows();

            When.onTheRequisitionsList.onTable().iPressRow(0);
            Then.onTheRequisitionsObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});