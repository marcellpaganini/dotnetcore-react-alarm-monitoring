using Server.Models;

namespace Server.Data
{
    public class UserRepository: IUserRepository
    {
        private readonly UserContext _context;

        public UserRepository(UserContext context) 
        {
            _context = context;
        }

        public User Create(User user) 
        {
            _context.Users.Add(user);
            user.Id = Guid.NewGuid();
            _context.SaveChanges();
            
            return user;
        }
    }
}