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

    public Round CreateRound()
    {
      var roundInProgress = this.repository.GetInProgress();
      if (roundInProgress != null)
      {
        return roundInProgress;
      }

      var teams = this.teamService.GetNotEliminated();
      if (teams.Count.Equals(1))
      {
        return null;
      }
      var rounds = this.repository.GetAll();
      var round = new Round(teams);
      round.Name = string.Format("Round {0}", rounds.Count + 1);
      return this.repository.Add(round);
    }

    public void Edit(Round round)
    {
      round.Matches.ForEach(m =>
      {
        m.Teams.ForEach(t =>
        {
          this.teamService.Edit(t);
        });
      });
      this.repository.Edit(round);
    }

    public void ClearRounds()
    {
      this.repository.DeleteAll();
      var teams = this.teamService.GetAll();
      teams.ForEach(t =>
      {
        t.Eliminated = false;
        this.teamService.Edit(t);
      });
    }

    public List<Round> GetAll()
    {
      return this.repository.GetAll();
    }

    public Round GetById(long id)
    {
      return this.repository.GetById(id);
    }
  }
}