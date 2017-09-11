import { Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { Team } from './../../shared/team.model';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'nibo-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit, OnDestroy {
  @Input() team: Team;
  @Output() saved = new EventEmitter<Team>();
  @ViewChild('form') form: NgForm;
  private subscription: Subscription;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.form.setValue(this.team);
      this.subscription = this.form.valueChanges
        .debounceTime(400)
        .subscribe(value => this.saved.emit(value));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
