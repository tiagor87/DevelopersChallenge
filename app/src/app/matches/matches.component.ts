import { RoundService } from './../shared/round.service';
import { Match } from './../shared/match.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nibo-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit, OnDestroy {
  matches: Array<Match>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private roundService: RoundService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loadRound(+params['id']);
    });
  }

  ngOnDestroy() {}

  private loadRound(id: number) {
    this.roundService
      .getById(id)
      .subscribe(
        round => (this.matches = round.matches),
        error => console.log(error)
      );
  }
}
