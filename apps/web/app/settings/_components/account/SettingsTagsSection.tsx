"use client";
import React from "react";
import { Crown, Pencil, Tags, Trash } from "lucide-react";
import SettingLayout from "@app/settings/_components/SettingLayout";
import { Button } from "@repo/ui";
import { Tag as TTag } from "@repo/db";
import AddTagModal from "./AddTagModal";
import EditTagModal from "@app/settings/_components/account/EditTagModal";
import DeleteTagModal from "@app/settings/_components/account/DeleteTagModal";
import { useAction } from "next-safe-action/hooks";
import { toggleTagActive } from "@app/settings/_components/account/actions";
import { cn } from "@lib/utils";

export interface SettingsTagsSectionProps {
   tags: TTag[];
}

const SettingsTagsSection = ({ tags }: SettingsTagsSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Tags className={`text-neutral-500`} size={22} />
               <span className={`text-xl text-neutral-500`}>Tags</span>
            </h2>
            <p className={`mt-2 text-base`}>
               Using tags, you can compare how fast you're typing in different situations. You can see your active
               tags
               above the test words. They will remain active until you deactivate them, or refresh the page.
            </p>
         </div>
         <div className={`w-full flex flex-col items-start gap-2`}>
            {[...tags].map((tag, index) => (
               <Tag tag={tag} key={index} />
            ))}
            <AddTagModal>
               <Button variant={`default`} className={`w-full shadow-md`}>
                  Add a tag
               </Button>
            </AddTagModal>
         </div>
      </SettingLayout>);
};

const Tag = ({ tag }: { tag: TTag }) => {
   const { execute, status } = useAction(toggleTagActive, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
         } else {
         }
      },
   });
   const handeToggleTagActive = () => execute({ id: tag.id });

   return (
      <div className={`w-full flex items-center gap-1`}>
         <Button
            onClick={handeToggleTagActive}
            variant={`outline`}
            className={cn(
               `flex-1 hover:!text-black hover:!bg-neutral-300 transition-colors duration-200`,
               tag.metadata?.active === true && `!bg-white !text-black`
            )}>
            {tag.name}
         </Button>
         <Button size={`icon`}
                 variant={`outline`}
                 className={`flex-1 hover:!text-black hover:!bg-neutral-300 transition-colors duration-200`}
         >
            <Crown size={20} />
         </Button>
         <EditTagModal tag={tag}>
            <Button size={`icon`}
                    variant={`outline`}
                    className={`flex-1 hover:!text-black hover:!bg-neutral-300 transition-colors duration-200`}
            >
               <Pencil size={20} />
            </Button>
         </EditTagModal>
         <DeleteTagModal tag={tag}>
            <Button size={`icon`}
                    variant={`outline`}
                    className={`flex-1 hover:!text-black hover:!bg-neutral-300 transition-colors duration-200`}
            >
               <Trash size={20} />
            </Button>
         </DeleteTagModal>
      </div>
   );
};

export default SettingsTagsSection;