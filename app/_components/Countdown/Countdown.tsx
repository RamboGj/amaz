// components/Countdown.tsx
'use client';

import { useEffect, useState } from 'react';
import { differenceInSeconds, parseISO, intervalToDuration, differenceInMilliseconds } from 'date-fns';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ releaseDate }: { releaseDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = parseISO(new Date().toISOString());
    const end = parseISO(releaseDate);
    const totalDuration = differenceInMilliseconds(end, start);

    const updateCountdown = () => {
      const now = new Date();
      const secondsLeft = differenceInSeconds(end, now);
      const elapsed = differenceInMilliseconds(now, start);

      if (secondsLeft > 0) {
        const duration = intervalToDuration({ start: now, end });
        setTimeLeft({
          days: duration.days ?? 0,
          hours: duration.hours ?? 0,
          minutes: duration.minutes ?? 0,
          seconds: duration.seconds ?? 0,
        });

        const progressPercent = (elapsed / totalDuration) * 100
        setProgress(progressPercent);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, [releaseDate]);

  return (
    <div>
        <div className="mt-14 flex gap-x-12 items-stretch">
        <div className="flex flex-col gap-y-1">
            <h3 className="font-ClashDisplayMedium text-[2rem] text-white">{timeLeft.days}</h3>
            <span className="text-[1rem] font-GeneralSansRegular text-[#A9B6B3]">Days</span>
        </div>
        <div className="flex flex-col gap-y-1">
            <h3 className="font-ClashDisplayMedium text-[2rem] text-white">{timeLeft.hours}</h3>
            <span className="text-[1rem] font-GeneralSansRegular text-[#A9B6B3]">Hours</span>
        </div>
        <div className="flex flex-col gap-y-1">
            <h3 className="font-ClashDisplayMedium text-[2rem] text-white">{timeLeft.minutes}</h3>
            <span className="text-[1rem] font-GeneralSansRegular text-[#A9B6B3]">Minutes</span>
        </div>
        <div className="flex flex-col gap-y-1">
            <h3 className="font-ClashDisplayMedium text-[2rem] text-white">{timeLeft.seconds}</h3>
            <span className="text-[1rem] font-GeneralSansRegular text-[#A9B6B3]">Seconds</span>
        </div>

        
        </div>
            <div className="mt-8 w-full h-3 bg-[#2E3A39] rounded-full overflow-hidden max-w-[400px]">
                <div
                className="h-full bg-brandGradient transition-all duration-500 ease-in-out"
                style={{ width: `${progress * 10}%` }}
                />
            </div>
        </div>
  );
};
