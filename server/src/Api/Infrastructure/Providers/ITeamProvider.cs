using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers
{
  public interface ITeamProvider
  {
    Team GetById(long id);

    List<Team> GetAll();

    List<Team> GetNotEliminated();

    Team Add(Team team);

    void Edit(Team team);

    void DeleteById(long id);
  }
}