import { RoundService } from './../../shared/round.service';
import { Round } from './../../shared/round.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nibo-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  editingRound: Round;
  rounds: Round[];
  constructor(private roundService: RoundService) {}

  ngOnInit() {
    this.roundService
      .getAll()
      .subscribe(rounds => (this.rounds = rounds), error => console.log(error));
  }

  new() {
    this.editingRound = { id: 0, name: '' };
  }

  edit(round: Round) {
    this.editingRound = round;
  }

  save(i: number, round: Round) {
    this.roundService.save(round).subscribe(
      t => {
        if (!!round.id) {
          this.rounds.splice(i, 1, t);
        } else {
          this.rounds.push(t);
        }
        this.editingRound = null;
      },
      error => console.log(error)
    );
  }
}
