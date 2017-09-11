import { Team } from './team.model';

export interface Match {
  id: number;
  teams: Team[];
  inProgress: boolean;
}
