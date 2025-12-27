import Fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import { verifyTelegramInitData } from "./telegramAuth.js";

/* --------------------------------------------------
   SERVER SETUP
-------------------------------------------------- */

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: true
});

/* --------------------------------------------------
   IN-MEMORY PLAYER STORE (TEMP)
-------------------------------------------------- */

const players = new Map();

function getPlayer(telegramId) {
  if (!players.has(telegramId)) {
    players.set(telegramId, {
      telegramId,
      energy: 10,
      maxEnergy: 10,
      credits: 0,
      lastSpin: Date.now()
    });
  }
  return players.get(telegramId);
}

/* --------------------------------------------------
   SLOT SYMBOLS & RNG (ORIGINAL)
-------------------------------------------------- */

const SYMBOLS = [
  { id: "CR10", weight: 50, reward: 10 },
  { id: "CR20", weight: 30, reward: 20 },
  { id: "CR40", weight: 15, reward: 40 },
  { id: "MOD", weight: 4, reward: 0 },
  { id: "JACKPOT", weight: 1, reward: 500 }
];

function rollSymbol() {
  const totalWeight = SYMBOLS.reduce((s, x) => s + x.weight, 0);
  let roll = Math.random() * totalWeight;

  for (const sym of SYMBOLS) {
    roll -= sym.weight;
    if (roll <= 0) return sym;
  }
}

/* --------------------------------------------------
   ROUTES
-------------------------------------------------- */

// Health check
fastify.get("/", async () => {
  return { status: "Neon Salvage API online" };
});

// 🔐 SECURE SPIN ENDPOINT
fastify.post("/spin", async (req, reply) => {
  const { initData } = req.body || {};

  if (!initData) {
    return reply.code(400).send({ error: "Missing initData" });
  }

  const isValid = verifyTelegramInitData(
    initData,
    process.env.BOT_TOKEN
  );

  if (!isValid) {
    return reply.code(403).send({ error: "Invalid Telegram auth" });
  }

  // Extract Telegram user
  const params = new URLSearchParams(initData);
  const userRaw = params.get("user");

  if (!userRaw) {
    return reply.code(400).send({ error: "User data missing" });
  }

  const user = JSON.parse(userRaw);
  const telegramId = user.id;

  const player = getPlayer(telegramId);

  // Energy check
  if (player.energy <= 0) {
    return reply.code(403).send({ error: "No energy" });
  }

  // Deduct energy
  player.energy -= 1;
  player.lastSpin = Date.now();

  // Roll reels
  const reels = [
    rollSymbol(),
    rollSymbol(),
    rollSymbol()
  ];

  // Calculate reward
  let reward = reels.reduce((sum, r) => sum + r.reward, 0);

  // Match bonus
  if (reels.every(r => r.id === reels[0].id)) {
    reward *= 3;
  }

  player.credits += reward;

  return {
    reels: reels.map(r => r.id),
    reward,
    energy: player.energy,
    credits: player.credits
  };
});

/* --------------------------------------------------
   START SERVER (LAST)
-------------------------------------------------- */

const PORT = 3000;

fastify.listen({ port: PORT, host: "0.0.0.0" }, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
