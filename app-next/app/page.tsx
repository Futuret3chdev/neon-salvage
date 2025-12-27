"use client";

import { useEffect, useState } from "react";
import Reel from "../components/Reel";
import { shakeScreen } from "../lib/shake";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "https://neon-salvage.vercel.app/api/spin"
    : "/api/spin";

export default function Home() {
  const [energy, setEnergy] = useState(10);
  const [status, setStatus] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(["?", "?", "?"]);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.expand();
      tg.ready();
    }
  }, []);

  async function extract() {
    const tg = (window as any).Telegram?.WebApp;
    if (!tg || spinning) return;

    setSpinning(true);
    setStatus("Extracting…");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initData: tg.initData }),
      });

      const data = await res.json();

      if (data.error) {
        setStatus(data.error);
        setSpinning(false);
        return;
      }

      // staggered reel stop (AAA timing)
      setTimeout(() => setReels((r) => [data.reels[0], r[1], r[2]]), 600);
      setTimeout(() => setReels((r) => [r[0], data.reels[1], r[2]]), 900);
      setTimeout(() => setReels((r) => [r[0], r[1], data.reels[2]]), 1200);

      setTimeout(() => {
  setEnergy(data.energy);
  setStatus(`+${data.reward} CR`);

  if (data.reward >= 100) {
    shakeScreen(8, 400); // big win
  } else {
    shakeScreen(4, 250);
  }

  setSpinning(false);
}, 1400);

    } catch (err) {
      console.error(err);
      setStatus("Server error");
      setSpinning(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#0b1020] to-black">
      <h1 className="text-cyan-400 text-2xl tracking-widest font-bold">
        NEON SALVAGE
      </h1>

      <div className="bg-[#121a2f] px-4 py-2 rounded-xl shadow-inner shadow-cyan-500/30">
        ⚡ {energy}
      </div>

      <div className="flex gap-4">
        <Reel value={reels[0]} spinning={spinning} delay={0} />
        <Reel value={reels[1]} spinning={spinning} delay={0.15} />
        <Reel value={reels[2]} spinning={spinning} delay={0.3} />
      </div>

      <button
        onClick={extract}
        disabled={spinning}
        className="px-8 py-4 rounded-2xl text-black font-bold tracking-wide
          bg-gradient-to-r from-cyan-400 to-purple-500
          shadow-lg shadow-cyan-500/40
          active:scale-95 disabled:opacity-50"
      >
        EXTRACT
      </button>

      <div className="h-6 text-lg">{status}</div>
    </main>
  );
}
