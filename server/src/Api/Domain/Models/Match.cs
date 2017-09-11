using System.Collections.Generic;
using System.Linq;

namespace Api.Domain.Models
{
  public class Match
  {
    public Match()
    {
      this.Teams = new List<Team>(2);
    }

    public List<Team> Teams { get; set; }

    public bool InProgress
    {
      get
      {
        return !this.Teams.Any(t => t.Eliminated);
      }
    }
  }
}