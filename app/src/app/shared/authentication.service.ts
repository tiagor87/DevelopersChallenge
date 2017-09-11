import { Http } from '@angular/http';
import { AuthenticationResponse } from './authentication-response.model';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const AUTH_KEY = 'summoners_rift.auth';

@Injectable()
export class AuthenticationService {
  private auth: AuthenticationResponse;
  authChanged = new Subject<AuthenticationResponse>();
  endpoint = `${environment.api}/authentication`;
  constructor(private http: Http) {
    this.auth = this.getAuthFromStorage();
  }

  signIn(email: string, password: string) {
    return this.http.post(this.endpoint, {email: email, password: password})
    .map(response => {
      this.saveAuth(response.text());
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
