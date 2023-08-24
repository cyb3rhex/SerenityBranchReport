namespace MyProject.Reports {
    export class TransactionReportGrid extends Serenity.EntityGrid<any, any> {
        protected getColumnsKey() { return 'Reports.TransactionReport'; }
        protected getIdProperty() { return 'BranchId'; }  // Adjust based on your primary key
        protected getLocalTextPrefix() { return 'Reports.TransactionReport'; }
        protected getService() { return TransactionReportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
