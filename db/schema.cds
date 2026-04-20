namespace sap.capire.purchasing;
using { cuid, managed } from '@sap/cds/common';

entity Requisitions : cuid, managed {
    title       : String(100);
    description : String(500);
    status      : String(20) default 'Draft'; 
    totalAmount : Decimal(15, 2);
    currency    : String(3) default 'INR';
    criticality : Integer; // Added this field for color coding
    items       : Composition of many Items on items.parent = $self;
}

entity Items : cuid {
    parent      : Association to Requisitions;
    productName : String(100);
    quantity    : Integer;
    price       : Decimal(15, 2);
}