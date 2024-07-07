"use client";
import Confetti from "react-confetti";

export interface GameEndConfettiProps {}

const GameEndConfetti = ({}: GameEndConfettiProps) => {
   return (
      <Confetti
         className={`h-full w-1/5`}
         numberOfPieces={500}
         width={300}
         confettiSource={{
            x: 100,
            y: 100,
            w: 200,
            h: 200,
         }}
         recycle={false}
         tweenDuration={3000}
         height={300}
      />
   );
};

export default GameEndConfetti;
