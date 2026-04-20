sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"purchaserequests/test/integration/pages/RequisitionsList",
	"purchaserequests/test/integration/pages/RequisitionsObjectPage"
], function (JourneyRunner, RequisitionsList, RequisitionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('purchaserequests') + '/test/flp.html#app-preview',
        pages: {
			onTheRequisitionsList: RequisitionsList,
			onTheRequisitionsObjectPage: RequisitionsObjectPage
        },
        async: true
    });

    return runner;
});

