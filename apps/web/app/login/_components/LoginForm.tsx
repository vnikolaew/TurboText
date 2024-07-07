"use client";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBoolean } from "@hooks/useBoolean";
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
import { EyeIcon, EyeOffIcon, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SocialLogins from "./SocialLogins";

export interface LoginFormProps {}

const PASSWORD_REGEX =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?[\]\\';,./]).{6,}$/;

const formSchema = z.object({
   usernameOrEmail: z.string().min(2).max(50),
   password: z.string().min(6).max(50).regex(PASSWORD_REGEX),
   rememberMe: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

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

   async function onSubmit({
      usernameOrEmail,
      password,
      rememberMe,
   }: FormValues) {
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
         .then((res) => {
            console.log({ res });
            if (res?.error === `CredentialsSignin`) {
               form.setError(`usernameOrEmail`, {
                  message: `Invalid credentials`,
               });
            } else {
               router.push(`/`);
            }
         })
         .catch(console.error)
         .finally(() => setLoading(false));
   }

   return (
      <div className={`flex !w-1/3 flex-col gap-4`}>
         <div className={`flex items-center gap-2`}>
            <LogIn className={`!stroke-[3px] !text-secondary`} size={18} />
            <span className={`!font-semibold text-secondary`}>Login</span>
         </div>
         <SocialLogins />
         <div className={`flex w-full items-center gap-3`}>
            <Separator
               orientation="horizontal"
               className={`!h-[2px] flex-1 rounded-full !bg-secondary`}
            />
            <span className={`text-secondary`}>or</span>
            <Separator
               orientation="horizontal"
               className={`!h-[2px] flex-1 rounded-full !bg-secondary`}
            />
         </div>
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="flex !w-full flex-col space-y-6"
            >
               <FormField
                  control={form.control}
                  name="usernameOrEmail"
                  render={({ field }) => (
                     <FormItem className={`!mt-4`}>
                        <FormLabel></FormLabel>
                        <FormControl className={`!mt-1`}>
                           <Input
                              className={`bg-secondary-bg !text-main`}
                              type={`text`}
                              required
                              placeholder="email"
                              {...field}
                           />
                        </FormControl>
                        <FormDescription></FormDescription>
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
                                 placeholder="password"
                                 {...field}
                              />
                              <PasswordIcon
                                 onClick={(_) => setShowPassword(!showPassword)}
                                 className={`absolute right-3 top-3 h-4 w-4 cursor-pointer`}
                              />
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
                     <FormItem className="!mt-4 flex flex-row items-start space-x-3 space-y-0 rounded-md !border-none">
                        <FormControl>
                           <Checkbox
                              className={`!h-5 !w-5 !text-accent data-[state=checked]:bg-main`}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                           />
                        </FormControl>
                        <div className="space-y-1 leading-none !text-main">
                           <FormLabel>Remember me</FormLabel>
                        </div>
                     </FormItem>
                  )}
               />
               <Button
                  disabled={loading}
                  size={`default`}
                  variant={`secondary`}
                  className={`!mt-8 flex !w-full items-center gap-2 self-end rounded-lg !bg-accent !px-12 !py-1 !text-main shadow-md`}
                  type="submit"
               >
                  {loading ? (
                     <LoadingSpinner />
                  ) : (
                     <Fragment>
                        <LogIn size={14} />
                        Sign in
                     </Fragment>
                  )}
               </Button>
               <Button
                  size={`sm`}
                  className={`!mx-0 !mt-1 !px-0 text-xs !text-secondary`}
                  variant={`link`}
                  asChild
               >
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
