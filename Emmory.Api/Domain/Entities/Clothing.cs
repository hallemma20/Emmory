namespace Emmory.Api.Domain.Entities
{
    public class Clothing
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;
        public long Category { get; set; }
        public string Brand { get; set; } = null!;
        public string Colour { get; set; } = null!;
        public string Size { get; set; } = null!;

        public string ImageUrl { get; set; } = null!;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
