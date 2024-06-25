import React from "react";

export interface NoRunsLabelProps {
}

const NoRunsLabel = ({}: NoRunsLabelProps) => {
   return <div className={`text-muted-foreground text-center text-sm leading-tight`}>No runs yet.</div>;
};

export default NoRunsLabel;