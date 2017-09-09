import { Round } from './../shared/round.model';
import { Subscription } from 'rxjs/Rx';
import { RoundService } from './../shared/round.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  rounds: Round[];
  constructor(private roundService: RoundService) {}

  ngOnInit() {
    this.roundService
      .getRounds()
      .subscribe(rounds => (this.rounds = rounds), error => console.log(error));
  }
}
