"use client";

import { useEffect, useState } from "react";
import Reel from "../components/Reel";
import { shakeScreen } from "../lib/shake";
import CoinBurst from "../components/CoinBurst";

export default function Home() {
  const [energy, setEnergy] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(["?", "?", "?"]);
  const [burst, setBurst] = useState(0);

  const noEnergy = energy !== null && energy <= 0;

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      tg.expand();
      tg.ready();
    }
  }, []);

  async function extract() {
    if (spinning || noEnergy) return;

    setSpinning(true);
    setStatus("Extracting…");

    const tg = (window as any).Telegram?.WebApp;
    const isTelegram = !!tg?.initData;

    /* ================================
       🟢 PUBLIC DEMO MODE (Browser)
       ================================ */
    if (!isTelegram) {
      const mockReels = ["CR10", "CR20", "CR40"];
      const mockReward = 70;

      setTimeout(() => setReels((r) => [mockReels[0], r[1], r[2]]), 600);
      setTimeout(() => setReels((r) => [r[0], mockReels[1], r[2]]), 900);
      setTimeout(() => setReels((r) => [r[0], r[1], mockReels[2]]), 1200);

      setTimeout(() => shakeScreen(6, 300), 1200);

      setTimeout(() => {
        setEnergy((e) => (e === null ? 9 : Math.max(0, e - 1)));
        setStatus(`+${mockReward} CR`);
        setBurst(10);
        setSpinning(false);
      }, 1400);

      return;
    }

    /* ================================
       🔵 TELEGRAM MODE (REAL API)
       ================================ */
    try {
      const res = await fetch("/api/spin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initData: tg.initData }),
      });

      const data = await res.json();

      if (data.error) {
        setStatus(data.error);

        if (data.error.toLowerCase().includes("energy")) {
          setEnergy(0);
        }

        setSpinning(false);
        return;
      }

      setTimeout(() => setReels((r) => [data.reels[0], r[1], r[2]]), 600);
      setTimeout(() => setReels((r) => [r[0], data.reels[1], r[2]]), 900);
      setTimeout(() => setReels((r) => [r[0], r[1], data.reels[2]]), 1200);

      setTimeout(
        () => shakeScreen(data.reward >= 100 ? 10 : 6, 380),
        1200
      );

      setTimeout(() => {
        setEnergy(data.energy);
        setStatus(`+${data.reward} CR`);
        setBurst(Math.min(18, Math.max(6, Math.floor(data.reward / 10))));
        setSpinning(false);
      }, 1400);
    } catch {
      setStatus("Server error");
      setSpinning(false);
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center gap-6
      bg-gradient-to-b from-[#050914] via-[#0b1020] to-black overflow-hidden">

      {burst > 0 && <CoinBurst count={burst} onDone={() => setBurst(0)} />}

      <h1 className="text-cyan-400 text-3xl tracking-[0.3em] font-extrabold drop-shadow-[0_0_12px_#00ffff88]">
        🚀 Neon Salvage
      </h1>

      <div className="px-5 py-2 rounded-xl text-lg font-semibold
        bg-[#121a2f] shadow-inner shadow-cyan-500/40
        border border-cyan-500/20">
        ⚡ {energy === null ? "…" : energy}
      </div>

      <div className="flex gap-4 mt-2">
        <Reel value={reels[0]} spinning={spinning} delay={0} />
        <Reel value={reels[1]} spinning={spinning} delay={0.15} />
        <Reel value={reels[2]} spinning={spinning} delay={0.3} />
      </div>

      <button
        onClick={extract}
        disabled={spinning || noEnergy}
        className="mt-2 px-10 py-4 rounded-2xl text-black font-extrabold tracking-wider
          bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
          shadow-[0_0_30px_#00ffff88]
          hover:scale-105 active:scale-95 transition
          disabled:opacity-40"
      >
        {noEnergy ? "OUT OF ENERGY" : "EXTRACT"}
      </button>

      <div className="h-6 text-lg font-medium text-cyan-300 drop-shadow">
        {status}
      </div>

      <div className="mt-6 text-xs tracking-widest text-cyan-300/70">
        $MT ecosystem powered by{" "}
        <span className="font-bold text-cyan-400">Futuret3ch</span>
      </div>
    </main>
  );
}
