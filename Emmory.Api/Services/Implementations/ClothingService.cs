using Emmory.Api.Domain.Entities;
using Emmory.Api.Infrastructure.Data;
using Emmory.Api.Models;
using Emmory.Api.Services.Interfaces;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using Emmory.Api.Models.Extensions;

namespace Emmory.Api.Services.Implementations
{
    public class ClothingService : IClothingService
    {
        private readonly EmmoryDbContext _db;

        public ClothingService(EmmoryDbContext db)
        {
            _db = db;
        }
        
        public int Add(ClothingDto clothingDto)
        {
            var clothing = new Clothing().MapFrom(clothingDto);

            _db.Clothings.Add(clothing);
            _db.SaveChanges();

            return clothing.Id;
        }

        public List<ClothingDto> Clothing()
        {
            var clothingList = _db.Clothings.ToList();
            return new List<ClothingDto>().MapFrom(clothingList);
        }
    }
}
