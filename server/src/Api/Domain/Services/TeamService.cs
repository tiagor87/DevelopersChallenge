using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;

namespace Api.Domain.Services
{
  public class TeamService
  {
    private ITeamRepository repository;

    public TeamService(ITeamRepository repository)
    {
      this.repository = repository;
    }

    public Team Add(Team team)
    {
      return this.repository.Add(team);
    }

    public void DeleteById(long id)
    {
      this.repository.DeleteById(id);
    }

    public void Edit(Team team)
    {
      this.repository.Edit(team);
    }

    public List<Team> GetAll()
    {
      return this.repository.GetAll();
    }

    public List<Team> GetNotEliminated()
    {
      return this.repository.GetNotEliminated();
    }

    public Team GetById(long id)
    {
      return this.GetById(id);
    }
  }
}