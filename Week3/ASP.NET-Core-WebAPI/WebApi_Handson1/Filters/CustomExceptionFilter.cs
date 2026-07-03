using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;

namespace WebApi_Handson1.Filters
{
    public class CustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            File.AppendAllText(
                "ErrorLog.txt",
                $"{DateTime.Now} : {context.Exception.Message}{Environment.NewLine}"
            );

            context.Result = new ObjectResult("Internal Server Error")
            {
                StatusCode = 500
            };
        }
    }
}