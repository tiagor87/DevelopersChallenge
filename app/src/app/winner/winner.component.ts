import { ActivatedRoute } from '@angular/router';
import { TeamService } from './../shared/team.service';
import { Team } from './../shared/team.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss']
})
export class WinnerComponent implements OnInit {
  team: Team;
  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadTeam();
  }

  private loadTeam() {
    this.teamService
      .getWinner()
      .subscribe(team => (this.team = team), error => console.log(error));
  }
}
