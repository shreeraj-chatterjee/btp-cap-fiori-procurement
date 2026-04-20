const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
    const { Requisitions } = this.entities;

    this.before(['CREATE', 'SAVE'], 'Requisitions', (req) => {
        const data = req.data;

        // 1. Validation: Ensure totalAmount is always positive
        if (data.totalAmount <= 0) {
            req.error(400, 'The Total Amount must be greater than zero.');
        }

        // 2. Business Logic: Set status to 'Pending Approval' for high-value orders
        if (data.totalAmount > 100000) {
            data.status = 'Pending Approval';
        }

        // 3. Color Logic (Criticality): Map status to colors
        // 1=Red (Rejected), 2=Orange (Pending), 3=Green (Approved), 0=Grey (Draft)
        switch (data.status) {
            case 'Draft':
                data.criticality = 0;
                break;
            case 'Pending Approval':
                data.criticality = 2;
                break;
            case 'Approved':
                data.criticality = 3;
                break;
            case 'Rejected':
                data.criticality = 1;
                break;
            default:
                data.criticality = 0;
        }
    });
});