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
    this.roundService.new().subscribe(
      round => {
        if (!round) {
          return;
        }
        const i = this.rounds.findIndex(r => r.id === round.id);
        if (i > -1) {
          this.rounds.splice(i, 1, round);
        } else {
          this.rounds.push(round);
        }
      },
      error => console.log(error)
    );
  }

  edit(round: Round) {
    this.editingRound = round;
  }

  save(i: number, round: Round) {
    this.roundService.save(round).subscribe(
      () => {
        Object.assign(this.rounds[i], round);
        if (!round.inProgress) {
          this.new();
        }
      },
      error => console.log(error)
    );
  }

  clear() {
    this.roundService
      .deleteAll()
      .subscribe(() => (this.rounds = []), error => console.log(error));
  }
}
