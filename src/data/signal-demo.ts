export type Signal = {
  id: string;
  sport: string;
  league: string;
  event: string;
  market: string;
  odds: number;
  stake: number;
  value: number;
  status: 'pending' | 'win' | 'loss' | 'void';
};
export const signals: Signal[] = [
  {
    id: '024',
    sport: 'Football',
    league: 'Premier League',
    event: 'Manchester United — Liverpool',
    market: 'Over 2.5 goals',
    odds: 1.91,
    stake: 1,
    value: 9.4,
    status: 'pending',
  },
  {
    id: '023',
    sport: 'Tennis',
    league: 'ATP Madrid',
    event: 'Alcaraz — Ruud',
    market: 'Alcaraz -1.5 sets',
    odds: 1.68,
    stake: 1.5,
    value: 12.7,
    status: 'win',
  },
  {
    id: '022',
    sport: 'Basketball',
    league: 'NBA',
    event: 'Boston Celtics — New York Knicks',
    market: 'Over 215.5 points',
    odds: 1.85,
    stake: 1,
    value: 8.9,
    status: 'loss',
  },
];
export const movements = [
  { event: 'Liverpool', market: '1X2', opening: 2.1, current: 1.82 },
  { event: 'Real Madrid', market: '1X2', opening: 1.74, current: 1.61 },
  { event: 'Inter Milan', market: 'Over 2.5', opening: 2.3, current: 2.48 },
  { event: 'Novak Djokovic', market: 'Match winner', opening: 1.45, current: 1.62 },
  { event: 'Boston Celtics', market: 'Moneyline', opening: 1.68, current: 1.74 },
];
const settled = signals.filter((s) => s.status === 'win' || s.status === 'loss');
export const performance = {
  picks: settled.length,
  wins: settled.filter((s) => s.status === 'win').length,
  losses: settled.filter((s) => s.status === 'loss').length,
  stake: settled.reduce((sum, s) => sum + s.stake, 0),
  profit: settled.reduce((sum, s) => sum + (s.status === 'win' ? s.stake * (s.odds - 1) : -s.stake), 0),
};
export const yieldPercent = performance.stake ? (performance.profit / performance.stake) * 100 : 0;
