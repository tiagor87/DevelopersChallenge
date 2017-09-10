using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers
{
  public interface IUserProvider
  {
    User GetUserByEmailAndPassword(string email, string password);

    List<User> GetAll();

    User Add(User user);

    void Edit(User user);

    void DeleteById(long id);
  }
}