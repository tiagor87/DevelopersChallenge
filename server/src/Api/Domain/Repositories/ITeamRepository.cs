using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Domain.Repositories
{
  public interface ITeamRepository
  {
    Team GetById(long id);

    List<Team> GetAll();

    List<Team> GetNotEliminated();

    Team Add(Team team);

    void Edit(Team team);

    void DeleteById(long id);
  }
}