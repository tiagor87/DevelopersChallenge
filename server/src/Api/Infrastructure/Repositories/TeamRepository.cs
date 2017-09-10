using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;
using Api.Infrastructure.Providers;
using Api.Infrastructure.Providers.Memory;

namespace Api.Infrastructure.Repositories
{
  public class TeamRepository : ITeamRepository
  {
    private ITeamProvider provider;
    public TeamRepository(ITeamProvider provider)
    {
      this.provider = provider;
    }

    public TeamRepository()
    {
      this.provider = new TeamProvider();
    }

    public Team Add(Team team)
    {
      return this.provider.Add(team);
    }

    public void DeleteById(long id)
    {
      this.provider.DeleteById(id);
    }

    public void Edit(Team team)
    {
      this.provider.Edit(team);
    }

    public List<Team> GetAll()
    {
      return this.provider.GetAll();
    }

    public List<Team> GetNotEliminated()
    {
      return this.provider.GetNotEliminated();
    }

    public Team GetById(long id)
    {
      return this.provider.GetById(id);
    }
  }
}