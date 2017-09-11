using System.Collections.Generic;
using System.Linq;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers.Memory
{
  public class RoundProvider : IRoundProvider
  {
    private static List<Round> rounds = new List<Round>();

    public Round Add(Round round)
    {
      rounds.Add(round);
      round.Id = rounds.Count;
      return round;
    }

    public void Edit(Round round)
    {
      rounds.RemoveAll(r => r.Id.Equals(round.Id));
      rounds.Add(round);
    }

    public List<Round> GetAll()
    {
      return rounds.ToList();
    }

    public Round GetInProgress()
    {
      return rounds.FirstOrDefault(r => r.InProgress);
    }

    public Round GetById(long id)
    {
      return rounds.FirstOrDefault(r => r.Id.Equals(id));
    }

    public void DeleteAll()
    {
      rounds.Clear();
    }
  }
}