using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors();

builder.Services.AddDbContextFactory<UserContext>(options => 
{
    var connectionString = builder.Configuration.GetConnectionString("MariaDbConnectionString");
    options.UseMySql(connectionString, MariaDbServerVersion.AutoDetect(connectionString), b => b.MigrationsAssembly("Server"));
});

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<JwtService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(options => options
    .WithOrigins(new [] {"http://localhost:3000"})   //(ReactJs)More urls can be added to the array if needed
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
    );

app.MapControllers();

app.Run();
