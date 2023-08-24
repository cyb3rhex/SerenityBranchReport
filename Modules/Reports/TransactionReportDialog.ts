namespace MyProject.Reports {
    export class TransactionReportDialog extends Serenity.EntityDialog<any, any> {
        protected getFormKey() { return TransactionReportForm.formKey; }

        private form: TransactionReportForm;

        constructor() {
            super();

            this.form = new TransactionReportForm(this.idPrefix);

            // When button is clicked, fetch report.
            this.byId('ReportButton').click(e => {
                this.loadReport();
            });
        }

        private loadReport(): void {
            Q.serviceRequest('Services/TransactionReport/GetReport', {
                request: {
                    BranchId: this.form.BranchId.value,
                    StartDate: this.form.StartDate.valueAsDate,
                    EndDate: this.form.EndDate.valueAsDate
                },
                onSuccess: response => {
                    
                }
            });
        }
    }
}
