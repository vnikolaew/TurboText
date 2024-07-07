"use client";
import SettingLayout from "@app/settings/_components/SettingLayout";
import DeleteTagModal from "@app/settings/_components/account/DeleteTagModal";
import EditTagModal from "@app/settings/_components/account/EditTagModal";
import { toggleTagActive } from "@app/settings/_components/account/actions";
import { userActiveTagsAtom } from "@atoms/user";
import { cn } from "@lib/utils";
import { Tag as TTag } from "@repo/db";
import { Button } from "@repo/ui";
import { useSetAtom } from "jotai/index";
import { Crown, Pencil, Tags, Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import AddTagModal from "./AddTagModal";

export interface SettingsTagsSectionProps {
   tags: TTag[];
}

const SettingsTagsSection = ({ tags }: SettingsTagsSectionProps) => {
   return (
      <SettingLayout className={``}>
         <div className={`flex flex-col items-start gap-2`}>
            <h2 className={`inline-flex items-center gap-2`}>
               <Tags className={`text-main`} size={22} />
               <span className={`text-xl text-main`}>Tags</span>
            </h2>
            <p className={`mt-2 text-base text-secondary`}>
               Using tags, you can compare how fast you're typing in different
               situations. You can see your active tags above the test words.
               They will remain active until you deactivate them, or refresh the
               page.
            </p>
         </div>
         <div className={`flex w-full flex-col items-start gap-2`}>
            {[...tags].map((tag, index) => (
               <Tag tag={tag} key={index} />
            ))}
            <AddTagModal>
               <Button variant={`default`} className={`w-full shadow-md`}>
                  Add a tag
               </Button>
            </AddTagModal>
         </div>
      </SettingLayout>
   );
};

const Tag = ({ tag }: { tag: TTag }) => {
   const setActiveTags = useSetAtom(userActiveTagsAtom);

   const { execute, status } = useAction(toggleTagActive, {
      onSuccess: (res) => {
         if (res.data?.success) {
            console.log(res);
            setActiveTags((t) =>
               t.some((x) => x === tag.name)
                  ? t.filter((t) => t !== tag.name)
                  : [...t, tag.name]
            );
         }
      },
   });
   const handeToggleTagActive = () => execute({ id: tag.id });

   return (
      <div className={`flex w-full items-center gap-1`}>
         <Button
            onClick={handeToggleTagActive}
            variant={`secondary`}
            className={cn(
               `flex-1 transition-colors duration-200 hover:!bg-neutral-300 hover:!text-black`,
               tag.metadata?.active === true && `!bg-white !text-black`
            )}
         >
            {tag.name}
         </Button>
         <Button
            size={`icon`}
            variant={`secondary`}
            className={`flex-1 transition-colors duration-200 hover:!bg-neutral-300 hover:!text-black`}
         >
            <Crown size={20} />
         </Button>
         <EditTagModal tag={tag}>
            <Button
               size={`icon`}
               variant={`secondary`}
               className={`flex-1 transition-colors duration-200 hover:!bg-neutral-300 hover:!text-black`}
            >
               <Pencil size={20} />
            </Button>
         </EditTagModal>
         <DeleteTagModal tag={tag}>
            <Button
               size={`icon`}
               variant={`secondary`}
               className={`flex-1 transition-colors duration-200 hover:!bg-neutral-300 hover:!text-black`}
            >
               <Trash size={20} />
            </Button>
         </DeleteTagModal>
      </div>
   );
};

export default SettingsTagsSection;
