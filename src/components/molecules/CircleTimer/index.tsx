"use client";

import { useState, useEffect } from "react";

const TimeCircle = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white text-black rounded-full w-[62px] h-[62px] shadow-sm">
    <span className="font-bold text-base leading-none mb-0.5">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] font-medium capitalize">{label}</span>
  </div>
);

export const CircleTimer = () => {
  const calculateTimeLeft = () => {
    return { days: 5, hours: 23, minutes: 59, seconds: 35 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return prev; 
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-6">
      <TimeCircle value={timeLeft.days} label="Days" />
      <TimeCircle value={timeLeft.hours} label="Hours" />
      <TimeCircle value={timeLeft.minutes} label="Minutes" />
      <TimeCircle value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};