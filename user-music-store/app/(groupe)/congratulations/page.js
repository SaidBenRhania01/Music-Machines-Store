'use client';

import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Congratulations() {
  const router = useRouter();

  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-48 bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold md:text-3xl">Congratulations! 🎉</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Your order was placed successfully. Thank you for shopping with us!
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-5 py-2.5 bg-black text-white text-sm rounded-full"
        >
          Return to Shop
        </button>
      </div>
    </div>
  );
}
