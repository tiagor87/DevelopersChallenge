import { AdministrationRoutingModule } from './administration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { AdministrationComponent } from './administration.component';

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule],
  declarations: [UsersComponent, TeamsComponent, AdministrationComponent]
})
export class AdministrationModule {}
