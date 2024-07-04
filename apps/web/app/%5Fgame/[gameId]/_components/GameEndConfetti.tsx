"use client";
import React from "react";
import Confetti from "react-confetti";

export interface GameEndConfettiProps {
}

const GameEndConfetti = ({}: GameEndConfettiProps) => {
   return (
      <Confetti
         className={`w-1/5 h-full`}
         numberOfPieces={500}
         width={300}
         confettiSource={{
            x: 100, y: 100, w: 200, h: 200,
         }}
         recycle={false}
         tweenDuration={3000}
         height={300}
      />
   );
};

export default GameEndConfetti;