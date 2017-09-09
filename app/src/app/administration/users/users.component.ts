import { UserService } from './../../shared/user.service';
import { User } from './../../shared/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  editingUser: User;
  users: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe(users => (this.users = users));
  }

  new() {
    this.editingUser = { id: 0, name: '', email: '', password: '' };
  }

  edit(user: User) {
    this.editingUser = user;
  }

  save(i: number, user: User) {
    this.userService.save(user).subscribe(
      u => {
        if (!!user.id) {
          this.users.splice(i, 1, u);
        } else {
          this.users.push(u);
        }
        this.editingUser = null;
      },
      error => console.log(error)
    );
  }
}
