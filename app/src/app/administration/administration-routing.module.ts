import { RoundsComponent } from './rounds/rounds.component';
import { AdministrationComponent } from './administration.component';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdministrationComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'teams',
        component: TeamsComponent
      },
      {
        path: 'rounds',
        component: RoundsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {}
