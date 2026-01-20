using System.ComponentModel.DataAnnotations;

namespace Emmory.Api.Domain.Entities
{
    public class Clothing
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = null!;
        public long Category { get; set; }
        public string Brand { get; set; } = null!;
        public string Colour { get; set; } = null!;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public ICollection<Image> Images { get; set; } = new List<Image>();
    }
}
