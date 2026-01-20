namespace Emmory.Api.Domain.Entities
{
    public class Outfit
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public ICollection<OutfitImage> OutfitImages { get; set; } = new List<OutfitImage>();
    }

}
