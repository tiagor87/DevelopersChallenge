import { WinnerComponent } from './winner/winner.component';
import { RoundsComponent } from './rounds/rounds.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchesComponent } from './matches/matches.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rounds',
    component: RoundsComponent,
    children: [
      {
        path: 'winner',
        component: WinnerComponent
      },
      {
        path: ':id',
        component: MatchesComponent
      }
    ]
  },
  {
    path: 'teams',
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
