using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Infrastructure.Providers
{
  public interface IRoundProvider
  {
    List<Round> GetAll();

    Round GetInProgress();

    Round Add(Round round);

    void Edit(Round round);

    void DeleteAll();

    Round GetById(long id);
  }
}