import { TeamService } from './../../shared/team.service';
import { Team } from './../../shared/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: Team[];
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService
      .getAll()
      .subscribe(teams => (this.teams = teams), error => console.log(error));
  }
}
