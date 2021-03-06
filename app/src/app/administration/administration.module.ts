import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdministrationRoutingModule } from './administration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { AdministrationComponent } from './administration.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { RoundsComponent } from './rounds/rounds.component';
import { RoundEditComponent } from './round-edit/round-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    TeamsComponent,
    AdministrationComponent,
    UserEditComponent,
    TeamEditComponent,
    RoundsComponent,
    RoundEditComponent
  ]
})
export class AdministrationModule {}
