Product[] products =
{
    new Product(101, "Laptop", "Electronics"),
    new Product(102, "Mobile", "Electronics"),
    new Product(103, "Shoes", "Fashion"),
    new Product(104, "Watch", "Accessories")
};

Console.WriteLine("Linear Search:");

Product linearResult =
    LinearSearch.Search(products, "Shoes");

if (linearResult != null)
{
    Console.WriteLine(
        $"Found: {linearResult.ProductName}"
    );
}

Array.Sort(
    products,
    (a, b) => a.ProductName.CompareTo(b.ProductName)
);

Console.WriteLine("\nBinary Search:");

Product binaryResult =
    BinarySearch.Search(products, "Shoes");

if (binaryResult != null)
{
    Console.WriteLine(
        $"Found: {binaryResult.ProductName}"
    );
}