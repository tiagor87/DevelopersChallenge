import { NgForm } from '@angular/forms';
import { User } from './../../shared/user.model';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'nibo-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  @Output() saved = new EventEmitter<User>();
  @ViewChild('form') form: NgForm;
  constructor() {}

  ngOnInit() {
    setTimeout(() => this.form.setValue(this.user));
  }

  save(form: NgForm) {
    this.saved.emit(this.form.value);
  }
}
