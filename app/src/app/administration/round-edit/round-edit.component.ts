import { Subscription } from 'rxjs/Rx';
import { Team } from './../../shared/team.model';
import { TeamService } from './../../shared/team.service';
import { NgForm } from '@angular/forms';
import { Round } from './../../shared/round.model';
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { Match } from '../../shared/match.model';

@Component({
  selector: 'nibo-round-edit',
  templateUrl: './round-edit.component.html',
  styleUrls: ['./round-edit.component.scss']
})
export class RoundEditComponent implements OnInit {
  @Input() round: Round;
  @Output() saved = new EventEmitter<Round>();
  @ViewChild('form') form;
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.form.setValue({ name: this.round.name });
      this.subscription = this.form.valueChanges
        .debounceTime(400)
        .subscribe(value => {
          const round = Object.assign({}, this.round);
          round.name = value.name;
          this.saved.emit(round);
        });
    });
  }

  eliminate(match: Match, team: Team) {
    team.eliminated = true;
    match.inProgress = false;
    this.saved.emit(this.round);
  }
}
