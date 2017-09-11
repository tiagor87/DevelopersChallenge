import { environment } from './../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Round } from './round.model';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class RoundService {
  private endpoint = `${environment.api}/rounds`;
  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  public getAll() {
    return this.http.get(this.endpoint).map(response => response.json());
  }

  new() {
    return this.http.post(this.endpoint, {}, {
      headers: new Headers({
        Authorization: `bearer ${this.authenticationService.getAuth().token}`
      })
    }).map(response => {
      if (response.status === 201) {
        return response.json();
      }
      return null;
    });
  }

  save(round: Round) {
    return this.http
      .put(`${this.endpoint}/${round.id}`, round, {
        headers: new Headers({
          Authorization: `bearer ${this.authenticationService.getAuth().token}`
        })
      })
      .map(response => response.json());
  }

  getById(id: number) {
    return this.http
      .get(`${this.endpoint}/${id}`)
      .map(response => response.json());
  }

  deleteAll() {
    return this.http.delete(this.endpoint, {
      headers: new Headers({
        Authorization: `bearer ${this.authenticationService.getAuth().token}`
      })
    });
  }
}
