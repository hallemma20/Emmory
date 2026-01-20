using Emmory.Api.Domain.Entities;
using Emmory.Api.Infrastructure.Data;
using Emmory.Api.Managers.Interfaces;
using Emmory.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Emmory.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ClothingController : ControllerBase
{
    private readonly IClothingManager _clothingManager;

    public ClothingController(IClothingManager clothingManager)
    {
        _clothingManager = clothingManager;
    }

    //[HttpGet]
    //public async Task<IActionResult> GetAll()
    //{
    //    var items = await _db.Clothings.ToListAsync();
    //    return Ok(items);
    //}

    [HttpGet("ping")]
    public IActionResult Ping()
    {
        return Ok("Pong");
    }

    [HttpPost("add")]
    public IActionResult Add(ClothingDto clothing)
    {
        var newId = _clothingManager.Add(clothing);
        return Ok(newId);
    }

    [HttpGet("clothing")]
    public IActionResult Clothing()
    {
        var clothingList = _clothingManager.Clothing();
        return Ok(clothingList);
    }
}