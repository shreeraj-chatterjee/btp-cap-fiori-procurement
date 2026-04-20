using { sap.capire.purchasing as my } from '../db/schema';

service PurchasingService {
    @odata.draft.enabled
    entity Requisitions as projection on my.Requisitions;
    entity Items as projection on my.Items;
}

annotate PurchasingService.Requisitions with @(
    UI: {
        LineItem: [
            { Value: title, Label: 'Title' },
            { 
                Value: status, 
                Label: 'Status',
                Criticality: criticality // Now links to the real field
            },
            { Value: totalAmount, Label: 'Total Amount' },
            { Value: currency, Label: 'Currency' },
            { Value: createdAt, Label: 'Date Created' }
        ],
        // ... Keep the rest of your UI annotations exactly as they were ...
        HeaderInfo: {
            TypeName: 'Requisition',
            TypeNamePlural: 'Requisitions',
            Title: { Value: title }
        },
        Facets: [
            { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Main', Label: 'Main Information' }
        ],
        FieldGroup#Main: {
            Data: [
                { Value: title },
                { Value: description },
                { 
                    Value: status,
                    Criticality: criticality 
                },
                { Value: totalAmount },
                { Value: currency }
            ]
        }
    }
);