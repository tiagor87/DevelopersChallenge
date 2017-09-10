using System.Collections.Generic;
using Api.Domain.Models;
using Api.Domain.Repositories;

namespace Api.Domain.Services
{
  public class RoundService
  {
    private IRoundRepository repository;
    private TeamService teamService;

    public RoundService(IRoundRepository repository, TeamService teamService)
    {
      this.repository = repository;
      this.teamService = teamService;
    }

    public Round createRound()
    {
      var roundInProgress = this.repository.GetInProgress();
      if (roundInProgress != null)
      {
        return roundInProgress;
      }

      var teams = this.teamService.GetNotEliminated();
      var round = new Round(teams);
      return this.repository.Add(round);
    }

    public List<Round> GetAll()
    {
      return this.repository.GetAll();
    }
  }
}