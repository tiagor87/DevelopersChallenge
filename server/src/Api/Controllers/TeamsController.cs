using System;
using System.Linq;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{

  [Route("api/[controller]")]
  public class TeamsController : Controller
  {
    private TeamService service;

    public TeamsController()
    {
      this.service = new TeamService(new TeamRepository());
    }

    [HttpGet("winner")]
    public IActionResult GetWinner()
    {
      try
      {
        var teams = this.service.GetNotEliminated();
        if (teams.Count == 1)
        {
          return StatusCode(200, teams.First());
        }
        return StatusCode(404, null);
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
        var team = this.service.GetById(id);
        return StatusCode(200, team);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [HttpGet]
    public IActionResult GetAll()
    {
      try
      {
        var teams = this.service.GetAll();
        return StatusCode(200, teams);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // POST api/values
    [HttpPost]
    public IActionResult Post([FromBody]Team team)
    {
      try
      {
        return StatusCode(201, this.service.Add(team));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]Team team)
    {
      try
      {
        this.service.Edit(team);
        return StatusCode(200, null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      try
      {
        this.service.DeleteById(id);
        return StatusCode(204, null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }
  }
}