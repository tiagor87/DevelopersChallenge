import { MatchService } from './../shared/match.service';
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
    private matchService: MatchService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.loadMatches(+params['id']);
    });
  }

  ngOnDestroy() {}

  private loadMatches(roundId: number) {
    this.matchService
      .getMatchesByRoundId(roundId)
      .subscribe(
        matches => (this.matches = matches),
        error => console.log(error)
      );
  }
}
