using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Domain.Repositories
{
  public interface IUserRepository
  {
    User GetUserByEmailAndPassword(string email, string password);

    List<User> GetAll();

    User Add(User user);

    void Edit(User user);

    void DeleteById(long id);
  }
}