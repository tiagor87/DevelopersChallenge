import { Http, Headers } from '@angular/http';
import { Team } from './team.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TeamService {
  private endpoint = `${environment.api}/teams`;
  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  getAll() {
    return this.http.get(`${this.endpoint}`, {
      headers: new Headers({
        Authorization: `bearer ${this.authenticationService.getAuth().token}`
      })
    }).map(response => response.json());
  }

  getWinner() {
    return this.http
      .get(`${this.endpoint}/winner`)
      .map(response => response.json());
  }

  save(team: Team) {
    if (!team.id) {
      return this.http
        .post(this.endpoint, team, {
          headers: new Headers({
            Authorization: `bearer ${this.authenticationService.getAuth().token}`
          })
        })
        .map(response => response.json());
    } else {
      return this.http
        .put(`${this.endpoint}/${team.id}`, team, {
          headers: new Headers({
            Authorization: `bearer ${this.authenticationService.getAuth().token}`
          })
        })
        .map(response => team);
    }
  }
}
