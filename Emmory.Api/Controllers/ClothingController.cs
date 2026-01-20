using Emmory.Api.Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Emmory.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClothingController : ControllerBase
{
    private readonly EmmoryDbContext _db;

    public ClothingController(EmmoryDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var items = await _db.Clothings.ToListAsync();
        return Ok(items);
    }
}