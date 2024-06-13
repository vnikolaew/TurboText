import React from "react";

export interface LetterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
}

const Letter = ({ ref, ...props }: LetterProps) => {
   return (
      <span ref={ref} {...props} />
   );
};

export default Letter;