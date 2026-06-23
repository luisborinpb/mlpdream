import { players, Player } from "@/data/players";
import { chemistryRules } from "@/data/chemistry";

export type Simulation = {
  rating: number;
  chemistry: number;
  record: string;
  wins: number;
  losses: number;
  champion: boolean;
  log: string[];
};

export function weightedRating(player: Player) {
  return Math.round(
    player.singles * 0.15 +
    player.doubles * 0.35 +
    player.mixed * 0.35 +
    player.clutch * 0.15
  );
}

export function rosterRating(roster: Player[]) {
  if (!roster.length) return 0;
  return Math.round(roster.reduce((sum, p) => sum + weightedRating(p), 0) / roster.length);
}

export function chemistryScore(roster: Player[]) {
  let score = 50;
  const ids = roster.map((p) => p.id);

  for (const rule of chemistryRules) {
    if (ids.includes(rule.players[0]) && ids.includes(rule.players[1])) {
      score += rule.bonus;
    }
  }

  const men = roster.filter((p) => p.gender === "M").length;
  const women = roster.filter((p) => p.gender === "F").length;

  if (men >= 2 && women >= 2) score += 10;
  if (men < 2 || women < 2) score -= 12;

  return Math.max(0, Math.min(100, score));
}

export function getDraftOptions(roster: Player[], round: number) {
  const chosenIds = new Set(roster.map((p) => p.id));
  const remaining = players.filter((p) => !chosenIds.has(p.id));

  const men = roster.filter((p) => p.gender === "M").length;
  const women = roster.filter((p) => p.gender === "F").length;

  let pool = remaining;

  // Ensures the user can finish with at least 2 men and 2 women.
  const picksLeftAfterThis = 6 - round;
  if (men < 2 && 2 - men > picksLeftAfterThis) {
    pool = remaining.filter((p) => p.gender === "M");
  } else if (women < 2 && 2 - women > picksLeftAfterThis) {
    pool = remaining.filter((p) => p.gender === "F");
  }

  return shuffle(pool).slice(0, 4);
}

export function simulateSeason(roster: Player[]): Simulation {
  const rating = rosterRating(roster);
  const chemistry = chemistryScore(roster);
  const power = rating * 0.75 + chemistry * 0.25;

  const winProbability = Math.max(0.25, Math.min(0.92, (power - 70) / 35));
  let wins = 0;
  let losses = 0;

  for (let i = 0; i < 10; i++) {
    Math.random() < winProbability ? wins++ : losses++;
  }

  const log = [`Regular Season: ${wins}-${losses}`];

  const quarterWin = Math.random() < Math.min(0.95, winProbability + 0.05);
  if (!quarterWin) {
    log.push("Quarterfinal: Lost 2-3 in a DreamBreaker");
    return { rating, chemistry, record: `${wins}-${losses}`, wins, losses, champion: false, log };
  }

  log.push("Quarterfinal: Won 3-1");

  const semiWin = Math.random() < winProbability;
  if (!semiWin) {
    log.push("Semifinal: Lost 1-3");
    return { rating, chemistry, record: `${wins}-${losses}`, wins, losses, champion: false, log };
  }

  log.push("Semifinal: Won 3-2 in a DreamBreaker");

  const finalWin = Math.random() < Math.max(0.2, winProbability - 0.05);
  if (!finalWin) {
    log.push("Final: Lost 2-3 in a DreamBreaker");
    return { rating, chemistry, record: `${wins}-${losses}`, wins, losses, champion: false, log };
  }

  log.push("Final: Won 3-1");
  return { rating, chemistry, record: `${wins}-${losses}`, wins, losses, champion: true, log };
}

function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}
