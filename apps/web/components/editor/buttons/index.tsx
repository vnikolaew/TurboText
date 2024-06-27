import React from "react";
import PracticeWordsButton from "@components/editor/buttons/PracticeWordsButton";
import RestartButton from "@components/editor/buttons/RestartButton";
import NewRunButton from "@components/editor/buttons/NewRunButton";
import ToggleWordsHistory from "@components/editor/buttons/ToggleWordsHistory";
import CopyToClipboardButton from "@components/editor/buttons/CopyToClipboardButton";

export interface IndexProps {
}

const EditorButtons = ({}: IndexProps) => {
   return (
      <div className={`flex items-center justify-center w-full gap-4`}>
         <RestartButton />
         <PracticeWordsButton />
         <NewRunButton />
         <ToggleWordsHistory />
         <CopyToClipboardButton />
      </div>
   );
};

export default EditorButtons;