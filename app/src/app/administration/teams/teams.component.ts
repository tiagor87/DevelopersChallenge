import { TeamService } from './../../shared/team.service';
import { Team } from './../../shared/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  editingTeam: Team;
  teams: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService
      .getAll()
      .subscribe(teams => (this.teams = teams), error => console.log(error));
  }

  new() {
    this.editingTeam = { id: 0, eliminated: false, name: '' };
  }

  edit(team: Team) {
    this.editingTeam = team;
  }

  save(i: number, team: Team) {
    this.teamService.save(team).subscribe(
      t => {
        if (!!team.id) {
          Object.assign(this.teams[i], t);
        } else {
          this.teams.push(t);
          this.editingTeam = t;
        }
      },
      error => console.log(error)
    );
  }
}
