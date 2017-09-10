using System.Collections.Generic;
using System.Linq;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers.Memory
{
  public class TeamProvider : ITeamProvider
  {
    private static List<Team> teams = new List<Team> {
        new Team {
          Id = 1,
          Name = "Team A"
        },
        new Team {
          Id = 2,
          Name = "Team B"
        },
        new Team {
          Id = 3,
          Name = "Team C"
        },
        new Team {
          Id = 4,
          Name = "Team D"
        }
      };
    public Team Add(Team team)
    {
      teams.Add(team);
      team.Id = teams.Count;
      return team;
    }

    public void DeleteById(long id)
    {
      var savedTeam = teams.First(t => t.Id == id);
      teams.Remove(savedTeam);
    }

    public void Edit(Team team)
    {
      teams.RemoveAll(t => t.Id.Equals(team.Id));
      teams.Add(team);
    }

    public List<Team> GetAll()
    {
      return teams.ToList();
    }

    public List<Team> GetNotEliminated()
    {
      return teams.Where(t => !t.Eliminated).ToList();
    }

    public Team GetById(long id)
    {
      return teams.FirstOrDefault(t => t.Id.Equals(id));
    }
  }
}