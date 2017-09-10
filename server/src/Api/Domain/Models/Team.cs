using System.Collections.Generic;

namespace Api.Domain.Models
{
  public class Team
  {
    public Team()
    {
      this.Eliminated = false;
    }

    public long Id { get; set; }

    public string Name { get; set; }

    public bool Eliminated { get; set; }

    public bool IsValid(out List<string> mensagens)
    {
      mensagens = new List<string>();
      if (string.IsNullOrWhiteSpace(this.Name))
      {
        mensagens.Add("Should provide a valid name.");
      }
      return mensagens.Count > 0;
    }
  }
}