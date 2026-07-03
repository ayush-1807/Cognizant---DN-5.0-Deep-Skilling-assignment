using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;

using var context = new AppDbContext();

// Retrieve all products
var products = await context.Products.ToListAsync();

Console.WriteLine("All Products:");
foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price}");
}

// Find by Id
var product = await context.Products.FindAsync(1);
Console.WriteLine($"Found: {product?.Name}");

// First product with price > 5000
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 5000);

Console.WriteLine($"Expensive: {expensive?.Name}");