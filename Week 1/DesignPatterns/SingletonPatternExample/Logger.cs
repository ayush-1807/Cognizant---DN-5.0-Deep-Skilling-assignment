public class Logger
{
    private static Logger instance;

    private Logger()
    {
        Console.WriteLine("Logger Instance Created");
    }

    public static Logger GetInstance()
    {
        if (instance == null)
        {
            instance = new Logger();
        }

        return instance;
    }
}