using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;
using Api.Infrastructure.Providers;
using Api.Infrastructure.Providers.Memory;

namespace Api.Infrastructure.Repositories
{
  public class RoundRepository : IRoundRepository
  {
    private IRoundProvider provider;
    public RoundRepository(IRoundProvider provider)
    {
      this.provider = provider;
    }

    public RoundRepository()
    {
      this.provider = new RoundProvider();
    }

    public Round Add(Round round)
    {
      return this.provider.Add(round);
    }

    public void Edit(Round round)
    {
      this.provider.Edit(round);
    }

    public List<Round> GetAll()
    {
      return this.provider.GetAll();
    }

    public Round GetInProgress()
    {
      return this.provider.GetInProgress();
    }
  }
}