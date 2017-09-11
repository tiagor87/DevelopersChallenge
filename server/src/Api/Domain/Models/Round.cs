using System.Collections.Generic;
using System.Linq;

namespace Api.Domain.Models
{
  public class Round
  {
    public Round(List<Team> teams)
    {
      this.Matches = new List<Match>();
      this.CreateMatches(teams);
    }

    // Empty create constructor for JSON to model
    public Round()
    {

    }

    public long Id { get; set; }

    public string Name { get; set; }

    public List<Match> Matches { get; set; }

    public bool InProgress
    {
      get
      {
        return this.Matches.Any(m =>
        {
          return !m.Teams.Any(t => t.Eliminated);
        });
      }
    }

    private void CreateMatches(List<Team> teams)
    {
      var stackTeams = new Stack<Team>(teams);
      while (stackTeams.Count > 0)
      {
        var match = new Match();
        match.Teams.Add(stackTeams.Pop());
        match.Teams.Add(stackTeams.Pop());
        this.Matches.Add(match);
      }
    }
  }
}