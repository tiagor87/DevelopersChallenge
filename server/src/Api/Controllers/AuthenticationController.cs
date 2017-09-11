using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using Api.Auth;
using Api.Contracts;
using Api.Domain.Models;
using Api.Domain.Services;
using Api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Api.Controllers.Authentication
{
  [Route("api/[controller]")]
  public class AuthenticationController : Controller
  {
    private UserService service;

    public AuthenticationController()
    {
      this.service = new UserService(new UserRepository());
    }

    [HttpPost]
    public IActionResult Login([FromBody] AuthenticationContract auth)
    {
      var user = this.service.GetByEmailAndPassword(auth.Email, auth.Password);
      if (user == null)
      {
        return BadRequest(new Exception("User or password invalid."));
      }

      return StatusCode(200, new
      {
        Token = this.CreateToken(user)
      });
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [HttpGet]
    public IActionResult GetAuth()
    {
      var email = this.User.Claims.First(c => c.Type.Equals("Email")).Value;
      var name = this.User.Claims.First(c => c.Type.Equals("Name")).Value;
      return StatusCode(200, new
      {
        Email = email,
        Name = name
      });
    }

    private string CreateToken(User user)
    {
      var handler = new JwtSecurityTokenHandler();

      ClaimsIdentity identity = new ClaimsIdentity(
          new GenericIdentity(user.Email, "TokenAuth"),
          new[] { new Claim("Name", user.Name),
                  new Claim("Email", user.Email) }
      );

      var now = DateTime.Now;

      var securityToken = handler.CreateToken(new SecurityTokenDescriptor
      {
        Issuer = TokenAuthOptions.Issuer,
        Audience = TokenAuthOptions.Audience,
        SigningCredentials = TokenAuthOptions.SigningCredentials,
        Subject = identity,
        Expires = now + TokenAuthOptions.ExpiresSpan,
        IssuedAt = DateTime.Now,
        NotBefore = DateTime.Now
      });
      return handler.WriteToken(securityToken);
    }
  }
}