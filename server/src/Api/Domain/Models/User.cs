using System;
using System.Collections.Generic;
using System.Net.Mail;
using System.Text;
using System.Text.RegularExpressions;

namespace Api.Domain.Models
{
  public class User
  {
    public long Id { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public string Name { get; set; }

    public bool IsValid(out List<string> messages)
    {
      messages = new List<string>();
      if (!string.IsNullOrWhiteSpace(this.Email) || !this.EmailIsValid())
      {
        messages.Add("Should provide a valid email.");
      }
      if (!string.IsNullOrWhiteSpace(this.Email))
      {
        messages.Add("Should provide a name.");
      }
      return messages.Count > 0;
    }

    private bool EmailIsValid()
    {
      try
      {
        new MailAddress(this.Email);
        return true;
      }
      catch (FormatException)
      {
        return false;
      }
    }
  }
}