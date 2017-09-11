import { Match } from './match.model';
export interface Round {
  id: number;
  name: string;
  inProgress: boolean;
  matches: Match[];
}
