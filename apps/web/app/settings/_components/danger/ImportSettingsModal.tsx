"use client";
import React, { PropsWithChildren, useState } from "react";
import { useBoolean } from "@hooks/useBoolean";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, toast } from "@repo/ui";
import LoadingButton from "@components/common/LoadingButton";
import { isExecuting } from "next-safe-action/status";
import { z } from "zod";
import { useAction } from "next-safe-action/hooks";
import { updateUserConfiguration } from "@app/settings/actions";
import { TOASTS } from "@config/toasts";

export interface ImportSettingsModalProps extends PropsWithChildren {
}

const schema = z.object({
   id: z.string(),
   test_difficulty: z.union([z.literal(`NORMAL`), z.literal(`EXPERT`), z.literal(`MASTER`)]),
   blind_mode: z.boolean(),
   input_freedom_mode: z.boolean(),
   input_confidence_mode: z.union([z.literal(`ON`), z.literal(`OFF`), z.literal(`MAX`)]),
   input_indicate_typos: z.union([z.literal(`BELOW`), z.literal(`OFF`), z.literal(`REPLACE`)]),

   sound_click_sound: z.string().nullable(),
   sound_error_sound: z.string().nullable(),

   caret_smoothness: z.union([z.literal(`SLOW`), z.literal(`OFF`), z.literal(`MEDIUM`), z.literal(`FAST`)]),
   caret_style: z.union([z.literal(`CURSOR`), z.literal(`OFF`), z.literal(`BLOCK`), z.literal(`BLOCK_FILLED`), z.literal(`UNDERSCORE`)]),
   pace_caret_style: z.union([z.literal(`CURSOR`), z.literal(`OFF`), z.literal(`BLOCK`), z.literal(`BLOCK_FILLED`), z.literal(`UNDERSCORE`)]),

   theme_flip_colors: z.boolean().nullable(),
   theme_colorful_mode: z.boolean().nullable(),

   elements_show_key_tips: z.boolean().nullable(),
   elements_show_oof_warning: z.boolean().nullable(),
   elements_show_caps_lock_warning: z.boolean().nullable(),
   elements_show_average: z.union([z.literal(`OFF`), z.literal(`SPEED`), z.literal(`ACC`), z.literal(`BOTH`)]),

   language: z.string(),
   metadata: z.record(z.string(), z.any()).nullable(),
}).partial();

const ImportSettingsModal = ({children}: ImportSettingsModalProps) => {
   const [value, setValue] = useState(``);
   const [open, setOpen] = useBoolean();
   const { execute, status } = useAction(updateUserConfiguration, {
      onSuccess: res => {
         if (res.success) {
            console.log(res);
            toast(TOASTS.IMPORT_SETTINGS_SUCCESS)
            setValue(``);
         } else {
            toast(TOASTS.IMPORT_SETTINGS_FAILURE)
            setValue(``);
         }

         setOpen(false);
      },
   });

   function handleImport(_: MouseEvent): void {
      try {
         const config = schema.safeParse(JSON.parse(value));
         if(config.success) {
            console.log(config.data);
            execute(config.data);
         }
      } catch (err) {
         console.error({ err });
       }
    }

   return (
      <Dialog onOpenChange={setOpen} open={open}>
         <DialogTrigger asChild>
            {children}
         </DialogTrigger>
         <DialogContent className={`z-[100] !bg-neutral-800`}>
            <DialogHeader>
               <DialogTitle className={`text-2xl`}>
                  Import
               </DialogTitle>
            </DialogHeader>
            <div className={`w-full`}>
               <Input
                  onChange={e => setValue(e.target.value)} value={value}
                  placeholder={`...`}
                  className={`!w-full !text-lg !bg-black focus:!outline-neutral-300`} />
            </div>
            <DialogFooter className={`w-full !mt-2`}>
               <LoadingButton
                  onClick={handleImport}
                  loadingText={`Saving ...`}
                  loading={isExecuting(status)}>
                  Import settings
               </LoadingButton>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default ImportSettingsModal;