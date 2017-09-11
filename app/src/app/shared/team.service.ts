import { Http } from '@angular/http';
import { Team } from './team.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class TeamService {
  private endpoint = `${environment.api}/teams`;
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(`${this.endpoint}`).map(response => response.json());
  }

  getWinner() {
    return this.http
      .get(`${this.endpoint}/winner`)
      .map(response => response.json());
  }

  save(team: Team) {
    if (!team.id) {
      return this.http
        .post(this.endpoint, team)
        .map(response => response.json());
    } else {
      return this.http
        .put(`${this.endpoint}/${team.id}`, team)
        .map(response => team);
    }
  }
}
