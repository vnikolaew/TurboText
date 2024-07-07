"use client";
import React, {} from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage, Input, toast } from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { sendEmailResetCode } from "@app/(loading)/account/forgot-password/actions";
import LoadingButton from "@components/common/LoadingButton";
import Link from "next/link";
import { useSetAtom } from "jotai/index";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordEmailAtom, resetPasswordStepAtom } from "../_atoms";
import { TOASTS } from "@config/toasts";

export interface ResetPasswordFormProps {
}

const formSchema = z.object({
   email: z.string().email(),
});

type FormValues = z.infer<typeof formSchema>;

const INITIAL_VALUES: FormValues = {
   email: ``,
};

const ResetPasswordForm = ({}: ResetPasswordFormProps) => {
   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         ...INITIAL_VALUES,
      },
   });

   const setEmail = useSetAtom(resetPasswordEmailAtom);
   const setStep = useSetAtom(resetPasswordStepAtom);

   const { isExecuting, execute } = useAction(sendEmailResetCode, {
      onSuccess: res => {
         if (res.data?.success) {
            console.log(res);
            setStep(s => s + 1);
            const { email } = form.getValues();
            setEmail(email!);
            toast(TOASTS.RESET_EMAIL_SENT_SUCCESS(email));
         }
      },
   });


   function onSubmit(values: FormValues) {
      if (!values.email?.length) return;
      execute({ ...values });
   }

   return (
      <div className={`w-full mt-4 flex flex-col items-center gap-4 `}>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="flex !w-full flex-col space-y-6 !items-center"
            >
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className={`!mt-4 !w-full`}>
                        <FormControl className={`!mt-1`}>
                           <Input
                              type={`email`}
                              placeholder={`Enter your email`}
                              className={`mt-4 max-w-[400px] !mx-auto`} {...field} />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />
               <LoadingButton
                  loading={isExecuting}
                  type={`submit`}
                  loadingText={`Sending email ...`}
                  className={`w-[400px] shadow-md mt-2 !bg-accent !text-foreground hover:!bg-opacity-70 transition-all duration-200 items-center gap-2`}
               >
                  Get 4-digit code
               </LoadingButton>
            </form>
         </Form>
         <Link className={`hover:!underline decoration-accent !text-accent !mx-1 !px-0 !mt-4`} href={`/login`}>
            Back to login
         </Link>
      </div>
   );
};

export default ResetPasswordForm;