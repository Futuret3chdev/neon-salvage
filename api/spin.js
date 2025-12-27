import { verifyTelegramInitData } from "./telegramAuth.js";


/**
 * NOTE:
 * Vercel serverless functions do NOT persist memory.
 * This Map is TEMP only (MVP).
 * We will replace this with a DB next.
 */
const players = new Map();

const SYMBOLS = [
  { id: "CR10", weight: 50, reward: 10 },
  { id: "CR20", weight: 30, reward: 20 },
  { id: "CR40", weight: 15, reward: 40 },
  { id: "MOD", weight: 4, reward: 0 },
  { id: "JACKPOT", weight: 1, reward: 500 }
];

function rollSymbol() {
  const total = SYMBOLS.reduce((s, x) => s + x.weight, 0);
  let r = Math.random() * total;
  for (const s of SYMBOLS) {
    if ((r -= s.weight) <= 0) return s;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { initData } = req.body || {};
  if (!initData) {
    return res.status(400).json({ error: "Missing initData" });
  }

  const valid = verifyTelegramInitData(
    initData,
    process.env.BOT_TOKEN
  );

  if (!valid) {
    return res.status(403).json({ error: "Invalid Telegram auth" });
  }

  const params = new URLSearchParams(initData);
  const user = JSON.parse(params.get("user"));
  const telegramId = user.id;

  if (!players.has(telegramId)) {
    players.set(telegramId, {
      energy: 10,
      maxEnergy: 10,
      credits: 0
    });
  }

  const player = players.get(telegramId);

  if (player.energy <= 0) {
    return res.status(403).json({ error: "No energy" });
  }

  player.energy -= 1;

  const reels = [
    rollSymbol(),
    rollSymbol(),
    rollSymbol()
  ];

  let reward = reels.reduce((s, r) => s + r.reward, 0);

  if (reels.every(r => r.id === reels[0].id)) {
    reward *= 3;
  }

  player.credits += reward;

  return res.json({
    reels: reels.map(r => r.id),
    reward,
    energy: player.energy,
    credits: player.credits
  });
}
