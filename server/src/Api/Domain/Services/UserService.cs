using System;
using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;

namespace Api.Domain.Services
{
  public class UserService
  {
    private IUserRepository repository;
    public UserService(IUserRepository repository)
    {
      this.repository = repository;
    }

    public User GetByEmailAndPassword(string email, string password)
    {
      return this.repository.GetUserByEmailAndPassword(email, password);
    }

    public List<User> GetAll()
    {
      return this.repository.GetAll();
    }

    public User Add(User user)
    {
      List<string> messages;
      if (user.IsValid(out messages))
      {
        return this.repository.Add(user);
      }
      throw new Exception(messages.ToString());
    }

    public void Edit(User user)
    {
      List<string> messages;
      if (user.IsValid(out messages))
      {
        this.repository.Edit(user);
        return;
      }
      throw new Exception(messages.ToString());
    }

    public void DeleteById(long id)
    {
      this.repository.DeleteById(id);
    }
  }
}