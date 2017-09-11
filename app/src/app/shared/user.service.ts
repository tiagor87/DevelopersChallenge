import { environment } from './../../environments/environment';
import { User } from './user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
  private endpoint = `${environment.api}/users`;
  constructor(private http: Http, private authenticationService: AuthenticationService) {}

  getAll() {
    return this.http.get(this.endpoint, {
      headers: new Headers({
        Authorization: `bearer ${this.authenticationService.getAuth().token}`
      })
    }).map(response => response.json());
  }

  save(user: User) {
    if (!user.id) {
      return this.http
        .post(this.endpoint, user, {
          headers: new Headers({
            Authorization: `bearer ${this.authenticationService.getAuth().token}`
          })
        })
        .map(response => response.json());
    } else {
      return this.http.put(`${this.endpoint}/${user.id}`, user, {
        headers: new Headers({
          Authorization: `bearer ${this.authenticationService.getAuth().token}`
        })
      }).map(() => user);
    }
  }
}
