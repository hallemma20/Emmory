using Emmory.Api.Domain.Entities;
using Emmory.Api.Enums;

namespace Emmory.Api.Models
{
    public class ClothingDto
    {
        public string Name { get; set; } = null!;
        public ClothingCategory Category { get; set; }
        public string Brand { get; set; } = null!;
        public string Colour { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }
        private List<Image>? Images { get; set; }
    }
}