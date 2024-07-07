import CopyToClipboardButton from "@components/editor/buttons/CopyToClipboardButton";
import NewRunButton from "@components/editor/buttons/NewRunButton";
import PracticeWordsButton from "@components/editor/buttons/PracticeWordsButton";
import RestartButton from "@components/editor/buttons/RestartButton";
import ToggleWordsHistory from "@components/editor/buttons/ToggleWordsHistory";

export interface IndexProps {}

const EditorButtons = ({}: IndexProps) => {
   return (
      <div className={`flex w-full items-center justify-center gap-4`}>
         <RestartButton />
         <PracticeWordsButton />
         <NewRunButton />
         <ToggleWordsHistory />
         <CopyToClipboardButton />
      </div>
   );
};

export default EditorButtons;
