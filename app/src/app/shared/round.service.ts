import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Round } from './round.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RoundService {
  private endpoint = `${environment.api}/rounds`;
  constructor(private http: Http) {}

  public getAll() {
    return this.http.get(this.endpoint).map(response => response.json());
  }

  new() {
    return this.http.post(this.endpoint, {}).map(response => {
      if (response.status === 201) {
        return response.json();
      }
      return null;
    });
  }

  save(round: Round) {
    return this.http
      .put(`${this.endpoint}/${round.id}`, round)
      .map(response => response.json());
  }

  getById(id: number) {
    return this.http
      .get(`${this.endpoint}/${id}`)
      .map(response => response.json());
  }

  deleteAll() {
    return this.http.delete(this.endpoint);
  }
}
