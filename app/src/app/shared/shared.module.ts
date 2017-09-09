import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { TeamService } from './team.service';
import { MatchService } from './match.service';
import { RoundService } from './round.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UserService, TeamService, MatchService, RoundService]
})
export class SharedModule {}
