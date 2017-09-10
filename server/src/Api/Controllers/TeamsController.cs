using System;
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

    [HttpGet("{id}")]
    public ObjectResult GetById(long id)
    {
      try
      {
        var team = this.service.GetById(id);
        return Ok(Json(team));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [HttpGet]
    public ObjectResult Get()
    {
      try
      {
        var teams = this.service.GetAll();
        return Ok(Json(teams));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // POST api/values
    [HttpPost]
    public ObjectResult Post([FromBody]Team team)
    {
      try
      {
        return StatusCode(201, Json(this.service.Add(team)));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public ObjectResult Put(int id, [FromBody]Team team)
    {
      try
      {
        this.service.Edit(team);
        return Ok(null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public ObjectResult Delete(int id)
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