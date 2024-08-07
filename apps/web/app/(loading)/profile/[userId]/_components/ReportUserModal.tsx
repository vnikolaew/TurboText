"use client";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { TOASTS } from "@config/toasts";
import { useBoolean } from "@hooks/useBoolean";
import { User } from "@repo/db";
import {
   Button,
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
   Textarea,
   toast,
} from "@repo/ui";
import { useAction } from "next-safe-action/hooks";
import { parseAsBoolean, useQueryState } from "nuqs";
import { PropsWithChildren, useState } from "react";
import { match } from "ts-pattern";
import { reportUser } from "../actions";
import GoogleReCaptcha from "./GoogleReCaptcha";

export interface ReportUserModalProps extends PropsWithChildren {
   user: Partial<User>;
}

const REPORT_REASONS = [
   "Inappropriate name",
   "Inappropriate bio",
   "Inappropriate social links",
   "Suspected cheating",
];

interface ReportUserModel {
   reason: string;
   comment: string;
}

const ReportUserModal = ({ children, user }: ReportUserModalProps) => {
   const [open, setOpen] = useBoolean();
   const [reportUserQs, setReportUserQs] = useQueryState(
      `report-user`,
      parseAsBoolean.withDefault(false)
   );

   const [reportUserModel, setReportUserModel] = useState<ReportUserModel>({
      reason: "",
      comment: "",
   });
   const { execute, isExecuting } = useAction(reportUser, {
      onSuccess: (res) => {
         if (res.data?.success) {
            toast(TOASTS.USER_REPORTED_SUCCESS);
            setOpen(false);
         }
      },
   });

   return (
      <Dialog
         onOpenChange={async (value) => {
            setOpen(value);
            if (!value) await setReportUserQs(null);
            else await setReportUserQs(true);
         }}
         open={open}
      >
         <DialogTrigger>{children}</DialogTrigger>
         <DialogContent className={`!bg-secondary-bg`}>
            <DialogHeader>
               <DialogTitle>Report a user</DialogTitle>
               <DialogDescription>
                  Please report users responsibly and add comments in English
                  only. Misuse may result in you losing access to this feature.
               </DialogDescription>
            </DialogHeader>
            <div className={`flex flex-col items-start gap-2`}>
               <h2 className={`!text-accent`}>user</h2>
               <span className={`text-xl !text-main`}>{user.name}</span>
            </div>
            <div className={`mt-4 flex flex-col items-start gap-2`}>
               <h2 className={`!text-accent`}>reason</h2>
               <Select
                  onValueChange={(value) =>
                     setReportUserModel({ ...reportUserModel, reason: value })
                  }
                  value={reportUserModel.reason}
               >
                  <SelectTrigger className="w-[180px]">
                     <SelectValue placeholder={REPORT_REASONS[0]} />
                  </SelectTrigger>
                  <SelectContent>
                     {REPORT_REASONS.map((reason, index) => (
                        <SelectItem key={reason} value={reason}>
                           {reason}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </div>
            <div className={`flex flex-col items-start gap-2`}>
               <h2 className={`!text-accent`}>comment</h2>
               <Textarea
                  onChange={(e) =>
                     setReportUserModel({
                        ...reportUserModel,
                        comment: e.target.value,
                     })
                  }
                  value={reportUserModel.comment}
                  rows={3}
                  className={`!w-full !text-main focus:!border-main`}
               />
            </div>
            <GoogleReCaptcha />
            <DialogFooter className={`mt-4 w-full`}>
               <Button
                  disabled={isExecuting}
                  onClick={(_) => {
                     execute({
                        userId: user.id!,
                        username: user.name!,
                        ...reportUserModel,
                     });
                  }}
                  type={"button"}
                  variant={`outline`}
                  className={`w-full items-center gap-2 shadow-md`}
               >
                  {match(isExecuting)
                     .with(true, (_) => (
                        <LoadingSpinner text={`Reporting ...`} />
                     ))
                     .otherwise((_) => `Report`)}
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default ReportUserModal;
