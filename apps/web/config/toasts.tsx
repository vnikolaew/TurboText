"use client";

import React from "react";
import { Check, Cookie, X } from "lucide-react";

export const TOASTS = {
   FORGOT_PASSWORD: {
      message: `Password reset successful`,
      description: `You've successfully reset your password.`,
      duration: 3_000,
   },
   EDIT_PROFILE_SUCCESS: {
      message: `Profile successfully edited.`,
      description: `You've successfully edited your profile details.`,
      className: ``,
      classNames: {
         title: `text-lg`, description: `text-md`,
      },
      duration: 10_000,
   },
   CHANGE_PROFILE_PICTURE_SUCCESS: {
      message: `Profile picture changed.`,
      description: `You've successfully changed your profile picture.`,
      className: ``,
      classNames: {
         title: `text-lg`, description: `text-md`,
      },
      duration: 10_000,
   },
   CHANGE_COOKIE_PREFERENCES_SUCCESS: {
      message: `Cookie preferences saved.`,
      description: `You've successfully saved your cookies preferences.`,
      className: ``,
      classNames: {
         title: `text-lg`, description: `text-md`,
      }, icon: <Cookie className={`text-orange-800`} size={16} />,
      duration: 10_000,
   },
   ACCEPT_COOKIE_CONSENT_SUCCESS: {
      message: `Cookies accepted.`,
      description: `You've successfully accepted the usage of cookies.`,
      className: ``,
      classNames: {
         title: `text-lg`, description: `text-md`,
      },
      icon: <Cookie className={`text-orange-800`} size={16} />,
      duration: 10_000,
   },
   USER_REPORT_SUCCESS: {
      message: `Message could not be sent.`,
      description: `There was a problem sending your message.`,
      className: ``,
      classNames: {
         title: `text-lg`, description: `text-md`,
      },
      duration: 10_000,
   },
   EXPORT_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600`} size={18} />
            <span>
Export successful
</span>
         </div>),
      className: `text-base font-normal`,
   },
   CREATE_CATEGORY_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600`} size={18} />
            <span>Category successfully created!</span>
         </div>),
      className: `text-base font-normal`,
   },
   CHANGE_CATEGORY_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600`} size={18} />
            <span>Note category successfully changed!</span>
         </div>),
      className: `text-base font-normal`,
   },
   DELETE_NOTE_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600 bg-green-600`} size={18} />
            <span>Note successfully deleted!</span>
         </div>),
      className: `text-base font-normal`,
   },
   USER_FEEDBACK_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600 bg-green-600`} size={18} />
            <span>Feedback successfully submitted!</span>
         </div>),
      description: `Thank you for your feedback!`,
      className: `text-base font-normal`,
   },
   CHANGE_USER_PROFILE_PIC_SUCCESS: {
      message:
         (<div className={`flex items-center gap-2`}>
            <Check className={`text-green-600 bg-green-600`} size={18} />
            <span>Profile picture successfully changed!</span>
         </div>),
      className: `text-base font-normal`,
   },
   SAVE_TYPING_RUN_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Your latest run has been saved!</span>
            </div>),
      className: `text-base font-normal`,
   },
   SAVE_TYPING_RUN_SUCCESS_NOTIFICATION: (message: string) => ({
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Your latest run has been saved! {message}</span>
            </div>),
      className: `text-base font-normal`,
   }),
   SAVE_TYPING_RUN_FAILURE: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Your latest run could not be saved!</span>
            </div>),
      className: `text-base font-normal`,
   },
   PUBLIC_LINK_COPIED_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>URL copied to clipboard</span>
            </div>),
      className: `text-base font-normal`,
   },
   DELETE_TAG_FAILURE: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Tag could not be deleted</span>
            </div>),
      className: `text-base font-normal`,
   },
   DELETE_TAG_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Tag successfully deleted</span>
            </div>),
      className: `text-base font-normal`,
   },
   ADD_NEW_TAG_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Tag successfully added</span>
            </div>),
      className: `text-base font-normal`,
   },
   EDIT_USERNAME_FAILURE: (error: string) => ({
      message:
         (
            <div className={`flex items-center gap-2`}>
               <X className={`text-red-600 bg-red-600`} size={18} />
               <span>Username could not be edited: {error}</span>
            </div>),
      description: error,
      className: `text-base font-normal`,
   }),
   EDIT_USERNAME_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Username successfully edited</span>
            </div>),
      className: `text-base font-normal`,
   },
   EDIT_TAG_FAILURE: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Tag could not be edited</span>
            </div>),
      className: `text-base font-normal`,
   },
   IMPORT_SETTINGS_FAILURE: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Could not parse JSON settings</span>
            </div>),
      className: `text-base font-normal`,
   },
   IMPORT_SETTINGS_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Settings successfully imported</span>
            </div>),
      className: `text-base font-normal`,
   },
   EDIT_TAG_SUCCESS: {
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>Tag successfully edited</span>
            </div>),
      className: `text-base font-normal`,
   },
   ADD_NEW_TAG_FAILURE: (error: string) => ({
      message:
         (
            <div className={`flex items-center gap-2`}>
               <Check className={`text-green-600 bg-green-600`} size={18} />
               <span>An error occurred: {error}</span>
            </div>),
      className: `text-base font-normal`,
   }),
   RUN_FAILED: (error: string) => ({
      message: (
         <div className={`flex items-center gap-2`}>
            <X className={`text-red-600`} size={18} />
            <span>Test failed - {error}</span>
         </div>
      ),
      className: `text-base font-normal`,
   }),
   ACCOUNT_VERIFIED: {
      message: (
         <div className={`flex items-center gap-2`}>
            <X className={`text-red-600`} size={18} />
            <span>Your account has been verified</span>
         </div>
      ),
      className: `text-base font-normal`,
   },
} as const;

// export const toast = ({ message, ...config }: ExternalToast & { message: ReactNode }) => sonnerToast(message, config);