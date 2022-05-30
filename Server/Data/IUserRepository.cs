using Server.Models;

namespace Server.Data
{
    public interface IUserRepository
    {
         User Create(User user);
         User? GetByUserName(string name);
    }
}