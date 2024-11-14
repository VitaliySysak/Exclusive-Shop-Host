"use client";

import { useEffect, useRef } from "react";

export default function BestSellingTimer() {
  const daysRef = useRef<HTMLHeadingElement>(null);
  const hoursRef = useRef<HTMLHeadingElement>(null);
  const minutesRef = useRef<HTMLHeadingElement>(null);
  const secondsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const dest = new Date("October 31, 2024 10:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = dest - now;

      if (diff <= 0) {
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedDays = days < 10 ? `0${days}` : `${days}`;
      const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      if (daysRef.current) daysRef.current.innerHTML = formattedDays;
      if (hoursRef.current) hoursRef.current.innerHTML = formattedHours;
      if (minutesRef.current) minutesRef.current.innerHTML = formattedMinutes;
      if (secondsRef.current) secondsRef.current.innerHTML = formattedSeconds;
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-row gap-2 md:gap-4 count-down-main">
      <div className="timer">
        <div className="rounded-full border bg-[#fff] py-1.5 w-[65px] md:w-[75px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3
            ref={daysRef}
            className="countdown-element font-bold text-xl text-center"
          ></h3>
          <p className="text-[12px] font-normal text-center w-full">days</p>
        </div>
      </div>

      <div className="timer">
        <div className="rounded-full border bg-[#fff] py-1.5 w-[65px] md:w-[75px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3
            ref={hoursRef}
            className="countdown-element font-bold text-xl text-center"
          ></h3>
          <p className="text-[12px] font-normal text-center w-full">Hour</p>
        </div>
      </div>

      <div className="timer">
        <div className="rounded-full border bg-[#fff] py-1.5 w-[65px] md:w-[75px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3
            ref={minutesRef}
            className="countdown-element  font-bold text-xl text-center"
          ></h3>
          <p className="text-[12px] font-normal  text-center w-full">Minutes</p>
        </div>
      </div>

      <div className="timer">
        <div className="rounded-full border bg-[#fff] py-1.5 w-[65px] md:w-[75px] flex items-center justify-center flex-col gap-0 aspect-square px-1.5">
          <h3
            ref={secondsRef}
            className="countdown-element font-bold text-xl text-center"
          ></h3>
          <p className="text-[12px] font-normal  text-center w-full">Seconds</p>
        </div>
      </div>
    </div>
  );
}
