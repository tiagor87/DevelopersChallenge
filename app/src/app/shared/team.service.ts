import { Team } from './team.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  private teams = [
    {
      id: 1,
      name: 'Team A'
    },
    {
      id: 2,
      name: 'Team B'
    },
    {
      id: 3,
      name: 'Team C'
    },
    {
      id: 4,
      name: 'Team D'
    }
  ];
  constructor() {}

  getAll() {
    return Observable.create(o => {
      o.next(this.teams.slice());
      o.complete();
    });
  }

  getById(id: number) {
    return Observable.create(o => {
      o.next(Object.assign({}, this.teams[id - 1]));
      o.complete();
    });
  }

  getWinner() {
    return this.getById(1);
  }

  save(team: Team) {
    if (!team.id) {
      this.teams.push(team);
      return Observable.create(o => {
        o.next(team);
        team.id = this.teams.length;
        o.complete();
      });
    } else {
      const i = this.teams.findIndex(t => t.id === team.id);
      this.teams.splice(i, 1, team);
      return Observable.create(o => {
        o.next(team);
        o.complete();
      });
    }
  }
}
