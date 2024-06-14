import { useAtom } from "jotai/index";
import { currentTimestampAtom, TIMES } from "@atoms/editor";
import { ToggleGroup } from "@repo/ui";
import { ToggleItem } from "@components/editor/toolbar/ToggleItem";
import React from "react";

export const TimeSelect = () => {
   const [time, setTime] = useAtom(currentTimestampAtom);

   return (
      <ToggleGroup
         onValueChange={value => setTime(Number(value))} type="single">
         {Object.entries(TIMES).map(([key, value]) => (
            <ToggleItem
               Icon={null!}
               value={value.toString()}
               active={time === value}
               text={value.toString()} />
         ))}
      </ToggleGroup>
   );
};