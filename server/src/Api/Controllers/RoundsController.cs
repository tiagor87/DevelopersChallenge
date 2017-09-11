using System;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    public IActionResult GetAll()
    {
      try
      {
        var rounds = this.service.GetAll();
        return StatusCode(200, rounds);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [HttpGet("{id}")]
    public IActionResult GetById(long id)
    {
      try
      {
        return StatusCode(200, this.service.GetById(id));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public IActionResult Put(long id, [FromBody]Round round)
    {
      try
      {
        this.service.Edit(round);
        return StatusCode(200, null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public IActionResult Post()
    {
      try
      {
        var round = this.service.CreateRound();
        if (round == null)
        {
          return StatusCode(204, null);
        }
        return StatusCode(201, round);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpDelete]
    public IActionResult DeleteAll()
    {
      try
      {
        this.service.ClearRounds();
        return StatusCode(204, null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
  }
}