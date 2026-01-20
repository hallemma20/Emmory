using Emmory.Api.Services.Interfaces;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using Microsoft.Data.SqlClient;

namespace Emmory.Api.Services.Implementations
{
    public class ClothingService : IClothingService
    {
        // Implementation of clothing-related services will go here
        private readonly string _connectionString;

        public ClothingService(IConfiguration appSettings)
        {
            _connectionString = appSettings.GetValue<string>("ConnectionStrings:Clothing");
        }
        //_configuration.GetValue<string>("Communication:Onboarding");

        //public async Task<string> Emma()
        //{
        //    await using var sqlConnection = new SqlConnection(_connectionString);

        //}
    }
}
