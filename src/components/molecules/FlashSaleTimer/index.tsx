"use client";

import { useState } from "react";

const TimeUnit = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-start gap-1 font-bold leading-none">
    <span className="text-[11px] font-medium text-black">{label}</span>
    <span className="text-3xl font-bold tracking-wider">
      {value.toString().padStart(2, "0")}
    </span>
  </div>
);

const Separator = () => <span className="text-danger text-3xl mx-2 mt-4">:</span>;

export const FlashSaleTimer = () => {
  const calculateTimeLeft = () => {
    return { days: 3, hours: 23, minutes: 19, seconds: 56 };
  };

  const [timeLeft] = useState(calculateTimeLeft());

  return (
    <div className="flex items-center">
      <TimeUnit label="Days" value={timeLeft.days} />
      <Separator />
      <TimeUnit label="Hours" value={timeLeft.hours} />
      <Separator />
      <TimeUnit label="Minutes" value={timeLeft.minutes} />
      <Separator />
      <TimeUnit label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};