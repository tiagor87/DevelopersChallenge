using System.Collections.Generic;
using System.Linq;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers.Memory
{
  public class UserProvider : IUserProvider
  {
    private static List<User> users = new List<User> {
      new User {
        Id = 1,
        Email = "tiagor87@gmail.com",
        Name = "Tiago Resende",
        Password = "123456"
      },
      new User {
        Id = 2,
        Email = "dev@nibo.com.br",
        Name = "Developer Nibo",
        Password = "123456"
      }
    };

    public User Add(User user)
    {
      users.Add(user);
      user.Id = users.Count;
      return user;
    }

    public void Edit(User user)
    {
      var savedUser = users.First(u => u.Id == user.Id);
      users.Remove(savedUser);
      user.Password = string.IsNullOrWhiteSpace(user.Password) ? savedUser.Password : user.Password;
      users.Add(user);
    }

    public List<User> GetAll()
    {
      // Return a copy
      return users.ToList();
    }

    public User GetUserByEmailAndPassword(string email, string password)
    {
      return users.FirstOrDefault(u => u.Email.Equals(email) && u.Password.Equals(password));
    }

    public void DeleteById(long id)
    {
      var savedUser = users.First(u => u.Id == id);
      users.Remove(savedUser);
    }
  }
}