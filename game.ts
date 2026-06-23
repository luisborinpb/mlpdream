export type Gender = "M" | "F";

export type Player = {
  id: string;
  name: string;
  gender: Gender;
  rarity: "Legendary" | "Epic" | "Rare" | "Common";
  country: string;
  singles: number;
  doubles: number;
  mixed: number;
  clutch: number;
};

export const players: Player[] = [
  { id: "ben-johns", name: "Ben Johns", gender: "M", rarity: "Legendary", country: "USA", singles: 96, doubles: 97, mixed: 97, clutch: 98 },
  { id: "jw-johnson", name: "JW Johnson", gender: "M", rarity: "Legendary", country: "USA", singles: 95, doubles: 97, mixed: 96, clutch: 96 },
  { id: "federico-staksrud", name: "Federico Staksrud", gender: "M", rarity: "Epic", country: "Argentina", singles: 96, doubles: 92, mixed: 90, clutch: 92 },
  { id: "connor-garnett", name: "Connor Garnett", gender: "M", rarity: "Epic", country: "USA", singles: 94, doubles: 92, mixed: 91, clutch: 92 },
  { id: "hayden-patriquin", name: "Hayden Patriquin", gender: "M", rarity: "Epic", country: "USA", singles: 91, doubles: 95, mixed: 93, clutch: 94 },
  { id: "dylan-frazier", name: "Dylan Frazier", gender: "M", rarity: "Epic", country: "USA", singles: 92, doubles: 95, mixed: 93, clutch: 93 },
  { id: "tyson-mcguffin", name: "Tyson McGuffin", gender: "M", rarity: "Rare", country: "USA", singles: 89, doubles: 88, mixed: 88, clutch: 91 },
  { id: "andrei-daescu", name: "Andrei Daescu", gender: "M", rarity: "Rare", country: "Romania", singles: 82, doubles: 94, mixed: 88, clutch: 89 },
  { id: "tama-shimabukuro", name: "Tama Shimabukuro", gender: "M", rarity: "Rare", country: "Brazil", singles: 88, doubles: 88, mixed: 86, clutch: 89 },
  { id: "g. newman", name: "Riley Newman", gender: "M", rarity: "Rare", country: "USA", singles: 84, doubles: 92, mixed: 93, clutch: 92 },

  { id: "anna-leigh-waters", name: "Anna Leigh Waters", gender: "F", rarity: "Legendary", country: "USA", singles: 99, doubles: 99, mixed: 99, clutch: 99 },
  { id: "anna-bright", name: "Anna Bright", gender: "F", rarity: "Legendary", country: "USA", singles: 91, doubles: 97, mixed: 98, clutch: 97 },
  { id: "catherine-parenteau", name: "Catherine Parenteau", gender: "F", rarity: "Epic", country: "Canada", singles: 94, doubles: 95, mixed: 95, clutch: 96 },
  { id: "lea-jansen", name: "Lea Jansen", gender: "F", rarity: "Epic", country: "USA", singles: 93, doubles: 91, mixed: 89, clutch: 91 },
  { id: "rachel-rohrabacher", name: "Rachel Rohrabacher", gender: "F", rarity: "Epic", country: "USA", singles: 88, doubles: 96, mixed: 94, clutch: 94 },
  { id: "tyra-black", name: "Tyra Black", gender: "F", rarity: "Epic", country: "USA", singles: 91, doubles: 93, mixed: 92, clutch: 93 },
  { id: "vivienne-david", name: "Vivienne David", gender: "F", rarity: "Rare", country: "Canada", singles: 86, doubles: 91, mixed: 91, clutch: 90 },
  { id: "parris-todd", name: "Parris Todd", gender: "F", rarity: "Rare", country: "USA", singles: 90, doubles: 90, mixed: 90, clutch: 91 },
  { id: "jade-kawamoto", name: "Jade Kawamoto", gender: "F", rarity: "Rare", country: "USA", singles: 82, doubles: 91, mixed: 88, clutch: 89 },
  { id: "jackie-kawamoto", name: "Jackie Kawamoto", gender: "F", rarity: "Rare", country: "USA", singles: 82, doubles: 91, mixed: 88, clutch: 89 }
];
