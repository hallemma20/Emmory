namespace Emmory.Api.Domain.Entities
{
    public class Image
    {
        public int Id { get; set; }

        public string Url { get; set; } = null!;
        public string? Caption { get; set; }

        // FK → Clothing
        public int ClothingId { get; set; }
        public Clothing Clothing { get; set; } = null!;

        // Many-to-many → Outfit
        public ICollection<OutfitImage> OutfitImages { get; set; } = new List<OutfitImage>();
    }
}
