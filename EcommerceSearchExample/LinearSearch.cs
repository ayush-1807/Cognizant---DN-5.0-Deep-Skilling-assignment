public class LinearSearch
{
    public static Product Search(Product[] products, string searchName)
    {
        foreach (Product product in products)
        {
            if (product.ProductName.ToLower() == searchName.ToLower())
            {
                return product;
            }
        }

        return null;
    }
}