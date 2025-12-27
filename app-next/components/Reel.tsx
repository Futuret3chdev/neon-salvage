"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SYMBOLS = ["CR10", "CR20", "CR40", "MOD", "JACKPOT"];

export default function Reel({
  value,
  spinning,
  delay = 0,
}: {
  value: string;
  spinning: boolean;
  delay?: number;
}) {
  const controls = useAnimation();

  useEffect(() => {
    async function spin() {
      if (!spinning) return;

      await controls.start({
        y: ["0%", "-80%"],
        transition: {
          repeat: Infinity,
          ease: "linear",
          duration: 0.4,
        },
      });
    }

    spin();
  }, [spinning, controls]);

  useEffect(() => {
    async function stop() {
      if (spinning) return;

      await controls.start({
        y: 0,
        transition: {
          delay,
          type: "spring",
          stiffness: 180,
          damping: 18,
        },
      });
    }

    stop();
  }, [spinning, controls, delay]);

  return (
    <div className="relative w-24 h-24 overflow-hidden rounded-xl bg-gradient-to-br from-[#1b2340] to-[#0d1224] shadow-lg shadow-cyan-500/30">
      <motion.div
        animate={controls}
        className="flex flex-col items-center"
      >
        {[...SYMBOLS, ...SYMBOLS].map((s, i) => (
          <div
            key={i}
            className={`h-24 flex items-center justify-center font-bold text-lg ${
              s === "JACKPOT"
                ? "text-yellow-300"
                : "text-cyan-200"
            }`}
          >
            {s}
          </div>
        ))}
      </motion.div>

      {/* FINAL SNAP DISPLAY (CLICK-THROUGH) */}
      {!spinning && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-bold text-lg text-cyan-200">
          {value}
        </div>
      )}
    </div>
  );
}
