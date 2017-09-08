import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { TeamService } from './team.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [UserService, TeamService]
})
export class SharedModule {}
