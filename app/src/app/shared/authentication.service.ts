import { AuthenticationResponse } from './authentication-response.model';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

const AUTH_KEY = 'summoners_rift.auth';

@Injectable()
export class AuthenticationService {
  private auth: AuthenticationResponse;

  authChanged = new Subject<AuthenticationResponse>();

  constructor() {
    this.auth = this.getAuthFromStorage();
  }

  signIn(email: string, password: string) {
    return Observable.create(o => {
      o.next({
        data: '{"token": "123654789abcdef", "identity":"tiagor87@gmail.com"}',
        json: function() {
          return JSON.parse(this.data);
        }
      });
      o.complete();
    }).map(response => {
      this.saveAuth(response.data);
      this.auth = response.json();
      this.authChanged.next(this.auth);
      return this.auth;
    });
  }

  signOut() {
    return Observable.create(o => {
      this.saveAuth(null);
      this.auth = null;
      this.authChanged.next(null);
      o.next();
      o.complete();
      return;
    });
  }

  isAuthenticated() {
    return !!this.auth;
  }

  getAuth() {
    return this.auth;
  }

  private saveAuth(authJson: string) {
    localStorage.setItem(AUTH_KEY, authJson);
  }

  private getAuthFromStorage() {
    const auth = localStorage.getItem(AUTH_KEY);
    return !!auth ? JSON.parse(auth) : null;
  }
}
