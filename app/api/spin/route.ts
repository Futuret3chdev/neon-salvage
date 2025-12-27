import { NextResponse } from "next/server";
import { verifyTelegramInitData } from "../telegramAuth";

/**
 * ⚠️ NOTE
 * Vercel serverless functions do NOT persist memory.
 * This Map is TEMP ONLY for MVP testing.
 * Replace with DB (KV / Redis / Supabase) later.
 */
const players = new Map<number, {
  energy: number;
  maxEnergy: number;
  credits: number;
}>();

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

  return SYMBOLS[0];
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { initData } = body ?? {};

    if (!initData) {
      return NextResponse.json(
        { error: "Missing initData" },
        { status: 400 }
      );
    }

    const valid = verifyTelegramInitData(
      initData,
      process.env.BOT_TOKEN as string
    );

    if (!valid) {
      return NextResponse.json(
        { error: "Invalid Telegram auth" },
        { status: 403 }
      );
    }

    const params = new URLSearchParams(initData);
    const userRaw = params.get("user");

    if (!userRaw) {
      return NextResponse.json(
        { error: "Invalid Telegram user" },
        { status: 400 }
      );
    }

    const user = JSON.parse(userRaw);
    const telegramId = Number(user.id);

    if (!players.has(telegramId)) {
      players.set(telegramId, {
        energy: 10,
        maxEnergy: 10,
        credits: 0
      });
    }

    const player = players.get(telegramId)!;

    if (player.energy <= 0) {
      return NextResponse.json(
        { error: "No energy", energy: 0 },
        { status: 403 }
      );
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

    return NextResponse.json({
      reels: reels.map(r => r.id),
      reward,
      energy: player.energy,
      credits: player.credits
    });

  } catch (err) {
    console.error("Spin API error:", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
