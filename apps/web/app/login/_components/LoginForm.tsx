"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";
import {
   Button,
   Checkbox,
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
   Input,
   Separator,
} from "@repo/ui";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useBoolean } from "@hooks/useBoolean";
import SocialLogins from "./SocialLogins";

export interface LoginFormProps {
}

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?[\]\\';,./]).{6,}$/;

const formSchema = z.object({
   usernameOrEmail: z.string().min(2).max(50),
   password: z.string().min(6).max(50).regex(PASSWORD_REGEX),
   rememberMe: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>

const INITIAL_VALUES: FormValues = {
   usernameOrEmail: ``,
   password: ``,
   rememberMe: false,
};

const LoginForm = ({}: LoginFormProps) => {
   const router = useRouter();
   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         ...INITIAL_VALUES,
      },
   });
   const [showPassword, setShowPassword] = useState(false);
   const pathname = usePathname();

   const PasswordIcon = useMemo(() => {
      return showPassword ? EyeOffIcon : EyeIcon;
   }, [showPassword]);
   const [loading, setLoading] = useBoolean();

   async function onSubmit({ usernameOrEmail, password, rememberMe }: FormValues) {
      setLoading(true);
      await signIn(`credentials`, {
         username: usernameOrEmail,
         email: usernameOrEmail,
         password: password,
         rememberMe,
         type: `signin`,
         redirect: false,
         callbackUrl: pathname,
      })
         .then(res => {
            console.log({ res });
            if (res?.error === `CredentialsSignin`) {
               form.setError(`usernameOrEmail`, { message: `Invalid credentials` });
            } else {
               router.push(`/`);
            }
         })
         .catch(console.error)
         .finally(() => setLoading(false));
   }

   return (
      <div className={`flex flex-col gap-4 !w-1/3`}>
         <div className={`flex items-center gap-2`}>
            <LogIn className={`!text-secondary !stroke-[3px]`} size={18} />
            <span className={`text-secondary !font-semibold`}>
               Login
            </span>
         </div>
         <SocialLogins />
         <div className={`w-full flex items-center gap-3`}>
            <Separator orientation="horizontal" className={`flex-1 !bg-secondary !h-[3px] rounded-full`} />
            <span className={`text-secondary`}>or</span>
            <Separator orientation="horizontal" className={`flex-1 !bg-secondary  !h-[3px] rounded-full`} />
         </div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col !w-full">
               <FormField
                  control={form.control}
                  name="usernameOrEmail"
                  render={({ field }) => (
                     <FormItem className={`!mt-4`}>
                        <FormLabel></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <Input className={`bg-secondary-bg !text-main`} type={`text`} required
                                  placeholder="email" {...field} />
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
                     <FormItem className={`!mt-2`}>
                        <FormLabel htmlFor={`password`}></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <div className={`relative`}>
                              <Input
                                 className={`!bg-secondary-bg !text-main`}
                                 required
                                 type={showPassword ? `text` : `password`}
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
                  name="rememberMe"
                  render={({ field }) => (
                     <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md !border-none !mt-4">
                        <FormControl>
                           <Checkbox
                              className={`!text-accent data-[state=checked]:bg-main !h-5 !w-5`}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                           />
                        </FormControl>
                        <div className="space-y-1 leading-none !text-main">
                           <FormLabel>
                              Remember me
                           </FormLabel>
                        </div>
                     </FormItem>
                  )}
               />
               <Button
                  disabled={loading}
                  size={`default`}
                  variant={`secondary`}
                  className={`self-end !px-12 !py-1 rounded-lg !mt-8 shadow-md !w-full flex items-center gap-2 !text-main !bg-accent`}
                  type="submit">
                  {loading ? <LoadingSpinner /> : (
                     <Fragment>
                        <LogIn size={14} />
                        Sign in
                     </Fragment>
                  )}
               </Button>
               <Button size={`sm`} className={`text-xs !mx-0 !px-0 !mt-1 !text-secondary`} variant={`link`} asChild>
                  <Link className={`text-right`} href={`/`}>
                     Forgot your password?
                  </Link>
               </Button>
            </form>
         </Form>
      </div>
   );
};

export default LoginForm;