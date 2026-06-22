public class DocumentFactory
{
    public static IDocument CreateDocument(string type)
    {
        if (type == "Word")
            return new WordDocument();

        if (type == "PDF")
            return new PdfDocument();

        if (type == "Excel")
            return new ExcelDocument();

        throw new Exception("Invalid Document Type");
    }
}