import React from "react";

export interface LetterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
}

const Letter = React.forwardRef<HTMLSpanElement, LetterProps>(({ ...props }: LetterProps, ref) => {
   return (
      <span ref={ref} {...props} />
   );
});

export default Letter;