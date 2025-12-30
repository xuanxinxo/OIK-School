'use client';

import { useEffect, useState } from 'react';

export default function AdmissionsCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date to April 15, 2025
    const targetDate = new Date('2025-04-15T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
        <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-sm text-white/80 mt-1">Ngày</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
        <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-sm text-white/80 mt-1">Giờ</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
        <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-sm text-white/80 mt-1">Phút</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
        <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-sm text-white/80 mt-1">Giây</div>
      </div>
    </div>
  );
}
