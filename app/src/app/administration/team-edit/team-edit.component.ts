import { NgForm } from '@angular/forms';
import { Team } from './../../shared/team.model';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'nibo-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  @Input() team: Team;
  @Output() saved = new EventEmitter<Team>();
  @ViewChild('form') form: NgForm;
  constructor() {}

  ngOnInit() {
    setTimeout(() => this.form.setValue(this.team));
  }

  save(form: NgForm) {
    this.saved.emit(this.form.value);
  }
}
