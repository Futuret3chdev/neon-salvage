"use client";

import { motion, AnimatePresence } from "framer-motion";
import MTCoin from "./MTCoin";

type Coin = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  r: number;
};

export default function CoinBurst({
  count,
  originY = 0,
  onDone,
}: {
  count: number;
  originY?: number;
  onDone?: () => void;
}) {
  const coins: Coin[] = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: 0,
    y: originY,
    dx: (Math.random() - 0.5) * 220,
    dy: -Math.random() * 260 - 120,
    r: Math.random() * 360,
  }));

  return (
    <AnimatePresence>
      {coins.map((c) => (
        <motion.div
          key={c.id}
          className="pointer-events-none fixed left-1/2 top-1/2 z-50"
          initial={{ x: 0, y: 0, opacity: 0, rotate: 0, scale: 0.6 }}
          animate={{
            x: c.dx,
            y: c.dy,
            opacity: [0, 1, 1, 0],
            rotate: c.r,
            scale: [0.6, 1, 0.9],
          }}
          transition={{
			duration: 1.2,
			ease: [0.22, 1, 0.36, 1],
			}}

          onAnimationComplete={onDone}
        >
          <MTCoin size={22 + Math.random() * 10} />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
