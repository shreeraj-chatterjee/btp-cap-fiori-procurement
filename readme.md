# SAP BTP Purchase Requisition Management Extension

A production-ready side-by-side extension built on SAP Business Technology Platform (BTP). This application automates the procurement workflow for purchase requisitions, ensuring data integrity and streamlined approval routing.

## Key Features

* **Automated Status Routing**: Implemented custom backend logic to automatically route requisitions exceeding ₹100,000 to "Pending Approval" status.
* **Business Validation**: Robust server-side validation logic ensures that all requisitions maintain a positive total amount before persistence.
* **Dynamic UX Criticality**: SAP Fiori Elements interface with color-coded status indicators (Orange for Pending, Grey for Draft) for immediate visual oversight.
* **Localized Procurement**: Built-in support for Indian Rupees (INR) as the default currency to meet regional business requirements.
* **Draft Management**: Native OData Draft support allowing users to save partial work and resume later.

## Technical Stack

* **Runtime**: Node.js
* **Framework**: SAP Cloud Application Programming Model (CAP)
* **Frontend**: SAP Fiori Elements (List Report & Object Page)
* **Database**: SQLite (Local Development) / SAP HANA Cloud (Production)
* **Tools**: SAP Business Application Studio

## Project Structure

| Folder | Purpose |
|--------|---------|
| `db/`  | Domain models (CDS) and initial data (CSV) |
| `srv/` | Service definitions and custom backend logic (JS) |
| `app/` | UI annotations and Fiori Elements configurations |

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the application:
   ```bash
   cds watch
   ```
3. Open the preview link and navigate to `/purchaserequests/webapp/index.html`.
