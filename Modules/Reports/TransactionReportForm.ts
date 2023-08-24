namespace MyProject.Reports {
    export class TransactionReportForm extends Serenity.PrefixedContext {
        static formKey = 'Reports.TransactionReport';

        constructor(prefix: string) {
            super(prefix);

            var s = Serenity;
            var w0 = s.IntegerEditor;
            var w1 = s.DateEditor;

            Q.initFormType(TransactionReportForm, [
                'BranchId', w0,
                'StartDate', w1,
                'EndDate', w1
            ]);
        }
    }
}
