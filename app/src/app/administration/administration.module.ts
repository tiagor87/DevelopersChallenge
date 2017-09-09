import { FormsModule } from '@angular/forms';
import { AdministrationRoutingModule } from './administration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { AdministrationComponent } from './administration.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule, FormsModule],
  declarations: [
    UsersComponent,
    TeamsComponent,
    AdministrationComponent,
    UserEditComponent
  ]
})
export class AdministrationModule {}
