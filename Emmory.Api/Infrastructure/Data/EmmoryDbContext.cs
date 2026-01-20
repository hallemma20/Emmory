using Emmory.Api.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Emmory.Api.Infrastructure.Data
{
    public class EmmoryDbContext : DbContext
    {
        public EmmoryDbContext(DbContextOptions<EmmoryDbContext> options)
            : base(options)
        {
        }

        public DbSet<Clothing> Clothings => Set<Clothing>();
    }
}
