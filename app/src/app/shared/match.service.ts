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
      },
      winnerId: 1
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
      },
      winnerId: 4
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
      },
      winnerId: 1
    }
  ];
  winner: {
    id: 1;
    name: 'Team A';
  };
  constructor() {}

  public getMatchesByRoundId(roundId: number) {
    return Observable.create(o => {
      o.next(this.matches.filter(m => m.roundId === roundId).slice());
      o.complete();
    });
  }
}
