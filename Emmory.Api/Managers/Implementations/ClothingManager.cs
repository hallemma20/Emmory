using Emmory.Api.Domain.Entities;
using Emmory.Api.Managers.Interfaces;
using Emmory.Api.Models;
using Emmory.Api.Services.Interfaces;

namespace Emmory.Api.Managers.Implementations
{
    public class ClothingManager : IClothingManager
    {
        private readonly IClothingService _clothingService;

        public ClothingManager(IClothingService clothingService)
        {
            _clothingService = clothingService;
        }

        public int Add(ClothingDto clothing)
        {
            return _clothingService.Add(clothing);
        }

        public List<ClothingDto> Clothing()
        {
            return _clothingService.Clothing();
        }
    }
}
