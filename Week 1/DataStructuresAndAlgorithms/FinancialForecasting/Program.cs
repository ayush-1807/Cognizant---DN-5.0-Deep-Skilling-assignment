using System;

class FinancialForecast
{
    // Recursive method to predict future value
    // Time Complexity: O(n)
    // n = number of years
    public static double PredictFutureValue(double currentValue,
                                            double growthRate,
                                            int years)
    {
        // Base condition
        if (years == 0)
        {
            return currentValue;
        }

        // Recursive call for next year
        return PredictFutureValue(
            currentValue * (1 + growthRate),
            growthRate,
            years - 1
        );
    }
}

class Program
{
    static void Main()
    {
        // Sample input values
        double presentValue = 1000;
        double growthRate = 0.10;
        int years = 3;

        double futureValue =
            FinancialForecast.PredictFutureValue(
                presentValue,
                growthRate,
                years
            );

        Console.WriteLine(
            $"Future Value after {years} years: {futureValue:F2}"
        );

        // Optimization:
        // For large values of years, an iterative approach
        // or Math.Pow() can be used to avoid deep recursion.
    }
}