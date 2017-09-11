import { AuthenticationService } from './authentication.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { TeamService } from './team.service';
import { RoundService } from './round.service';
import { BooleanPipe } from './boolean.pipe';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [BooleanPipe],
  exports: [BooleanPipe],
  providers: [UserService, TeamService, RoundService, AuthenticationService]
})
export class SharedModule {}
