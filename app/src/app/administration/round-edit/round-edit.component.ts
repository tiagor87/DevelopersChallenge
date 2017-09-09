import { Team } from './../../shared/team.model';
import { TeamService } from './../../shared/team.service';
import { MatchService } from './../../shared/match.service';
import { Match } from './../../shared/match.model';
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

@Component({
  selector: 'nibo-round-edit',
  templateUrl: './round-edit.component.html',
  styleUrls: ['./round-edit.component.scss']
})
export class RoundEditComponent implements OnInit {
  @Input() round: Round;
  @Output() saved = new EventEmitter<Round>();
  @ViewChild('form') form: NgForm;
  matches: Match[];
  teams: Team[];
  constructor(
    private teamService: TeamService,
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.teamService
      .getAll()
      .subscribe(teams => (this.teams = teams), error => console.log(error));
    this.matchService
      .getMatchesByRoundId(this.round.id)
      .subscribe(
        matches => (this.matches = matches),
        error => console.log(error)
      );
    setTimeout(() => this.form.setValue(this.round));
  }

  setTeamA(match: Match, id: number) {
    const teams = this.teams.filter(t => t.id === id);
    match.teamA = teams[0];
  }

  setTeamB(match: Match, id: number) {
    const teams = this.teams.filter(t => t.id === id);
    match.teamB = teams[0];
  }

  save(form: NgForm) {
    this.saved.emit(form.value);
  }
}
