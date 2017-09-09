import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MatchService {
  private matches = [
    {
      id: 1,
      roundId: 1,
      teamA: {
        id: 1,
        name: 'Team A'
      },
      teamB: {
        id: 2,
        name: 'Team B'
      }
    },
    {
      id: 2,
      roundId: 1,
      teamA: {
        id: 3,
        name: 'Team C'
      },
      teamB: {
        id: 4,
        name: 'Team D'
      }
    },
    {
      id: 3,
      roundId: 2,
      teamA: {
        id: 1,
        name: 'Team A'
      },
      teamB: {
        id: 4,
        name: 'Team D'
      }
    }
  ];
  winner: {
    id: 1;
    name: 'Team A';
  };
  constructor() {}

  public getMatchesByRoundId(roundId: number) {
    return Observable.create(o => {
      console.log(roundId);
      console.log(this.matches.filter(m => m.roundId === roundId));
      o.next(this.matches.filter(m => m.roundId === roundId).slice());
      o.complete();
    });
  }
}
