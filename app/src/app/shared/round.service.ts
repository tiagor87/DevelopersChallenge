import { Observable } from 'rxjs/Rx';
import { Round } from './round.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RoundService {
  private rounds = [
    {
      id: 1,
      name: 'Round 1'
    },
    {
      id: 2,
      name: 'Round 2'
    }
  ];
  constructor() {}

  public getAll() {
    return Observable.create(o => {
      o.next(this.rounds.slice());
      o.complete();
    });
  }

  save(round: Round) {
    if (!round.id) {
      this.rounds.push(round);
      return Observable.create(o => {
        o.next(round);
        round.id = this.rounds.length;
        o.complete();
      });
    } else {
      const i = this.rounds.findIndex(r => r.id === round.id);
      this.rounds.splice(i, 1, round);
      return Observable.create(o => {
        o.next(round);
        o.complete();
      });
    }
  }
}
