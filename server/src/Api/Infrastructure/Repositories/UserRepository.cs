using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;
using Api.Infrastructure.Providers;
using Api.Infrastructure.Providers.Memory;

namespace Api.Infrastructure.Repositories
{
  public class UserRepository : IUserRepository
  {
    private IUserProvider provider;

    public UserRepository(IUserProvider provider)
    {
      this.provider = provider;
    }

    public UserRepository()
    {
      this.provider = new UserProvider();
    }

    public User Add(User user)
    {
      return this.provider.Add(user);
    }

    public void Edit(User user)
    {
      this.provider.Edit(user);
    }

    public List<User> GetAll()
    {
      return this.provider.GetAll();
    }

    public User GetUserByEmailAndPassword(string email, string password)
    {
      return this.provider.GetUserByEmailAndPassword(email, password);
    }

    public void DeleteById(long id)
    {
      this.provider.DeleteById(id);
    }
  }
}