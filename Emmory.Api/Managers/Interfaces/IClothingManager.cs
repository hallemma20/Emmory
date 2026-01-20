using Emmory.Api.Domain.Entities;
using Emmory.Api.Models;

namespace Emmory.Api.Managers.Interfaces
{
    public interface IClothingManager
    {
        int Add(ClothingDto clothing);

        public List<ClothingDto> Clothing();
    }
}
