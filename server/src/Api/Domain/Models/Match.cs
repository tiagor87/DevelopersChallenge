using System.Collections.Generic;

namespace Api.Domain.Models
{
  public class Match
  {
    public Match()
    {
      this.Teams = new List<Team>(2);
    }

    public List<Team> Teams { get; set; }
  }
}