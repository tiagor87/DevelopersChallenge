using System.Collections.Generic;
using Api.Domain.Models;

namespace Api.Domain.Repositories
{
  public interface IRoundRepository
  {
    List<Round> GetAll();

    Round Add(Round round);

    void Edit(Round round);

    Round GetInProgress();

    void DeleteAll();

    Round GetById(long id);
  }
}