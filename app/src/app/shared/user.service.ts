import { User } from './user.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Tiago Resende',
      email: 'tiagor87@gmail.com',
      password: ''
    },
    {
      id: 2,
      name: 'Nibo',
      email: 'dev@nibo.com.br',
      password: ''
    }
  ];
  constructor() {}

  getAll() {
    return Observable.create(o => {
      o.next(this.users.slice());
      o.complete();
    });
  }

  save(user: User) {
    if (!user.id) {
      this.users.push(user);
      return Observable.create(o => {
        o.next(user);
        user.id = this.users.length;
        o.complete();
      });
    } else {
      const i = this.users.findIndex(u => u.id === user.id);
      this.users.splice(i, 1, user);
      return Observable.create(o => {
        o.next(user);
        o.complete();
      });
    }
  }
}
