namespace Emmory.Api.Domain.Entities
{
    public class OutfitImage
    {
        public int Id { get; set; }
        public int OutfitId { get; set; }
        public Outfit Outfit { get; set; } = null!;

        public int ImageId { get; set; }
        public Image Image { get; set; } = null!;
    }
}
