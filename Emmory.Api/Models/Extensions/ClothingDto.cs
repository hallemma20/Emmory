using Emmory.Api.Domain.Entities;
using Emmory.Api.Enums;

namespace Emmory.Api.Models.Extensions
{
    public static class ClothingDtoExtensions
    {
        public static Clothing MapFrom(this Clothing dest, ClothingDto src)
        {
            dest.Name = src.Name;
            dest.Category = (long)src.Category;
            dest.Brand = src.Brand;
            dest.Colour = src.Colour;
            dest.CreatedAt = src.CreatedAt ?? DateTime.Now;
            return dest;
        }

        public static ClothingDto MapFrom(this ClothingDto dest, Clothing src)
        {
            dest.Name = src.Name;
            dest.Category = (ClothingCategory)src.Category;
            dest.Brand = src.Brand;
            dest.Colour = src.Colour;
            dest.CreatedAt = src.CreatedAt;
            return dest;
        }

        public static List<ClothingDto> MapFrom(this List<ClothingDto> dest, List<Clothing> src)
        {
            dest.AddRange(src.Select(clothing => new ClothingDto().MapFrom(clothing)));
            return dest;
        }
    }
}
