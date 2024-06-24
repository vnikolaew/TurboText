"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon, EyeOffIcon, UserPlus } from "lucide-react";
import {
   Button,
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
   Input,
} from "@repo/ui";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { useBoolean } from "@hooks/useBoolean";
import { signIn } from "next-auth/react";

export interface RegisterFormProps {
}


const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?[\]\\';,./]).{6,}$/;

const formSchema = z.object({
   username: z.string().min(2).max(50),
   email: z.string().email(),
   verifyEmail: z.string().email(),
   password: z.string().min(6).max(50).regex(PASSWORD_REGEX),
   verifyPassword: z.string().min(6).max(50).regex(PASSWORD_REGEX),
})

type FormValues = z.infer<typeof formSchema>

const RegisterForm = ({}: RegisterFormProps) => {
   const router = useRouter();
   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         username: "",
         email: ``,
         verifyEmail: ``,
         password: ``,
         verifyPassword: ``,
      },
   });
   const [showPassword, setShowPassword] = useState(false);
   const pathname = usePathname();

   const PasswordIcon = useMemo(() => {
      return showPassword ? EyeOffIcon : EyeIcon;
   }, [showPassword]);
   const [loading, setLoading] = useBoolean();

   async function onSubmit({ username, password, verifyPassword, verifyEmail, email }: FormValues) {
      setLoading(true);
      if(email !== verifyEmail) {
         form.setError(`verifyEmail`, { message: `Emails don't match` });
         setLoading(false);
         return;
      }
      if(password !== verifyPassword) {
         form.setError(`verifyPassword`, { message: `Passwords don't match` });
         setLoading(false);
         return;
      }
      await signIn(`credentials`, {
         username,
         email,
         password,
         type: `signup`,
         redirect: false,
         callbackUrl: pathname,
      })
         .then(res => {
            if (res?.error === `CredentialsSignin`) {
               form.setError(`username`, { message: `Something went wrong.` });
            }
            router.push(`/`);
         })
         .catch(console.error)
         .finally(() => setLoading(false));
   }

   return (
      <div className={`flex flex-col gap-4 !w-1/3`}>
         <div className={`flex items-center gap-2`}>
            <UserPlus className={`!text-neutral-500 !stroke-[3px]`} size={18} />
            <span className={`text-neutral-500 !font-semibold`}>
               Register
            </span>
         </div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col !w-full">
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem className={`!mt-4`}>
                        <FormLabel></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <Input type={`text`} required placeholder="username" {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className={`!mt-0`}>
                        <FormLabel></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <Input type={`email`} required placeholder="email" {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="verifyEmail"
                  render={({ field }) => (
                     <FormItem className={`!mt-0`}>
                        <FormLabel></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <Input type={`email`} required placeholder="verify email" {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem className={`!mt-0`}>
                        <FormLabel htmlFor={`password`}></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <div className={`relative`}>
                              <Input required type={showPassword ? `text` : `password`}
                                     placeholder="password" {...field} />
                              <PasswordIcon
                                 onClick={_ => setShowPassword(!showPassword)}
                                 className={`w-4 h-4 absolute right-3 top-3 cursor-pointer`} />
                           </div>
                        </FormControl>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="verifyPassword"
                  render={({ field }) => (
                     <FormItem className={`!mt-0`}>
                        <FormLabel htmlFor={`verifyPassword`}></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <div className={`relative`}>
                              <Input required type={showPassword ? `text` : `password`}
                                     placeholder="verify password" {...field} />
                              <PasswordIcon
                                 onClick={_ => setShowPassword(!showPassword)}
                                 className={`w-4 h-4 absolute right-3 top-3 cursor-pointer`} />
                           </div>
                        </FormControl>
                        <FormMessage className={`dark:text-red-400`} />
                     </FormItem>
                  )}
               />
               <Button
                  disabled={loading}
                  size={`default`}
                  variant={`secondary`}
                  className={`self-end !px-12 !py-1 rounded-lg !mt-8 shadow-md !w-full flex items-center gap-2`}
                  type="submit">
                  {loading ? <LoadingSpinner /> : (
                     <Fragment>
                        <UserPlus size={14} />
                        Sign up
                     </Fragment>
                  )}
               </Button>
            </form>
         </Form>
      </div>
   );
};

export default RegisterForm;