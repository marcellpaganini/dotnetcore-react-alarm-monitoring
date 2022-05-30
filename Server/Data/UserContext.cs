using Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Server.Data
{
    public partial class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; } = default!;
    }
}