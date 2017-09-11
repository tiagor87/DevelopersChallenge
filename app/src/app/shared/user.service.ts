import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  private endpoint = `${environment.api}/users`;
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(this.endpoint).map(response => response.json());
  }

  save(user: User) {
    if (!user.id) {
      return this.http
        .post(this.endpoint, user)
        .map(response => response.json());
    } else {
      return this.http.put(`${this.endpoint}/${user.id}`, user).map(() => user);
    }
  }
}
