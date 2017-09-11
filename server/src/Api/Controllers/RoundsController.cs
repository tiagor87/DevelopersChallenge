using System;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
  [Route("api/[controller]")]
  public class RoundsController : Controller
  {
    private RoundService service;

    public RoundsController()
    {
      this.service = new RoundService(new RoundRepository(), new TeamService(new TeamRepository()));
    }

    [HttpGet]
    public ObjectResult GetAll()
    {
      try
      {
        var rounds = this.service.GetAll();
        return StatusCode(200, Json(rounds));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [HttpPut("{id}")]
    public ObjectResult Put(long id, [FromBody]Round round)
    {
      try
      {
        this.service.Edit(round);
        return StatusCode(200, Json(null));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [HttpPost]
    public ObjectResult Post()
    {
      try
      {
        var round = this.service.CreateRound();
        return StatusCode(201, Json(round));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
  }
}