using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
  [Route("api/[controller]")]
  public class UsersController : Controller
  {
    private UserService service;

    public UsersController()
    {
      this.service = new UserService(new UserRepository());
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var users = this.service.GetAll();
        return StatusCode(200, users);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpPost]
    public IActionResult Post([FromBody]User user)
    {
      try
      {
        return StatusCode(201, this.service.Add(user));
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody]User user)
    {
      try
      {
        this.service.Edit(user);
        return StatusCode(200, null);
      }
      catch (Exception e)
      {
        return BadRequest(e);
      }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
