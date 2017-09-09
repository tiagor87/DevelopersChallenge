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

  public getRounds() {
    return Observable.create(o => {
      o.next(this.rounds.slice());
      o.complete();
    });
  }
}
