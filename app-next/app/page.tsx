"use client";

import { useEffect, useState } from "react";
import Reel from "../components/Reel";
import { shakeScreen } from "../lib/shake";
import CoinBurst from "../components/CoinBurst";

export default function Home() {
  const [energy, setEnergy] = useState(10);
  const [status, setStatus] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(["?", "?", "?"]);
  const [burst, setBurst] = useState(0);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.expand();
      tg.ready();
    }
  }, []);

  async function extract() {
    if (spinning) return;

    setSpinning(true);
    setStatus("Extracting…");

    const tg = (window as any).Telegram?.WebApp;
    const isTelegram = !!tg?.initData;

    /* =====================================================
       🟢 PUBLIC DEMO MODE (Vercel / Browser / Remote Team)
       ===================================================== */
    if (!isTelegram) {
      const mockReels = ["CR10", "CR20", "CR40"];
      const mockReward = 70;

      setTimeout(() => setReels((r) => [mockReels[0], r[1], r[2]]), 600);
      setTimeout(() => setReels((r) => [r[0], mockReels[1], r[2]]), 900);
      setTimeout(() => setReels((r) => [r[0], r[1], mockReels[2]]), 1200);

      // impact moment
      setTimeout(() => {
        shakeScreen(6, 300);
      }, 1200);

      // settle + reward
      setTimeout(() => {
        setEnergy((e) => Math.max(0, e - 1));
        setStatus(`+${mockReward} CR`);
        setBurst(Math.min(12, Math.max(6, Math.floor(mockReward / 10))));
        setSpinning(false);
      }, 1400);

      return;
    }

    /* =====================================================
       🔵 TELEGRAM MODE (REAL API)
       ===================================================== */
    try {
      const res = await fetch("/api/spin", {
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

      setTimeout(() => setReels((r) => [data.reels[0], r[1], r[2]]), 600);
      setTimeout(() => setReels((r) => [r[0], data.reels[1], r[2]]), 900);
      setTimeout(() => setReels((r) => [r[0], r[1], data.reels[2]]), 1200);

      // impact moment
      setTimeout(() => {
        if (data.reward >= 100) {
          shakeScreen(10, 420); // big win
        } else {
          shakeScreen(6, 300);
        }
      }, 1200);

      // settle + reward
      setTimeout(() => {
        setEnergy(data.energy);
        setStatus(`+${data.reward} CR`);
        setBurst(Math.min(18, Math.max(6, Math.floor(data.reward / 10))));
        setSpinning(false);
      }, 1400);
    } catch (err) {
      console.error(err);
      setStatus("Server error");
      setSpinning(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-[#0b1020] to-black overflow-hidden">
      {/* 💰 Coin burst layer */}
      {burst > 0 && (
        <CoinBurst
          count={burst}
          onDone={() => setBurst(0)}
        />
      )}

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
