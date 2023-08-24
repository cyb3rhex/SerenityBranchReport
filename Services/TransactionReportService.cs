using MyProject.Entities;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;

namespace MyProject.Services
{
    public class TransactionReportRequest : ServiceRequest
    {
        public int? BranchId { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public class TransactionReportRow
    {
        // Add other fields you want to display in your report.
        public int BranchId { get; set; }
        public DateTime TransactionDate { get; set; }
    }

    public class TransactionReportResponse : ServiceResponse
    {
        public List<TransactionReportRow> ReportData { get; set; }
    }

    public class TransactionReportService : ServiceEndpoint
    {
        [Route("~/Services/TransactionReport/GetReport")]
        public TransactionReportResponse GetReport(IDbConnection connection, TransactionReportRequest request)
        {
            var reportData = connection.List<TransactionReportRow>(
                from t in new SqlQuery().From<Transactions>()
                where request.BranchId == null || t.BranchId == request.BranchId.Value
                where t.TransactionDate >= request.StartDate && t.TransactionDate <= request.EndDate
                select new
                {
                    t.BranchId,
                    t.TransactionDate
                    // Add other fields as needed.
                });

            return new TransactionReportResponse
            {
                ReportData = reportData
            };
        }
    }
}
