using Emmory.Api.Domain.Entities;
using Emmory.Api.Models;

namespace Emmory.Api.Services.Interfaces
{
    public interface IClothingService
    {
        int Add(ClothingDto clothing);

        public List<ClothingDto> Clothing();
    }
}
