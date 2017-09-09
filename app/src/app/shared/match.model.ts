import { Team } from './team.model';

export interface Match {
  id: number;
  roundId: number;
  teamA: Team;
  teamB: Team;
}
