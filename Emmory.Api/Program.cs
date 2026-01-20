using Emmory.Api.Infrastructure.Data;
using Emmory.Api.Managers.Implementations;
using Emmory.Api.Managers.Interfaces;
using Emmory.Api.Services.Implementations;
using Emmory.Api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<EmmoryDbContext>(options =>
{
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("Emmory")
    );
});
// Add services to the container.
builder.Services.AddScoped<IClothingService, ClothingService>();

builder.Services.AddScoped<IClothingManager, ClothingManager>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
