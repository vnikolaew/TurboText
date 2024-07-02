"use client";
import { Input } from "@repo/ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import useDebounce from "@hooks/useDebounce";
import { User } from "@repo/db";
import { AnimatePresence, motion } from "framer-motion";
import { useBoolean } from "@hooks/useBoolean";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { useSession } from "next-auth/react";
import UserSearchRow from "@app/_components/search/UserSearchRow";

export interface SearchInputProps {
}

const SearchInput = ({}: SearchInputProps) => {
   const [value, setValue] = useState(``);
   const session = useSession();
   const [searchUsers, setSearchUsers] = useState<User[]>([]);

   const [loading, setLoading] = useBoolean();
   const [inputFocused, setInputFocused]  = useBoolean()

   const debounced = useDebounce(value, 2_000);
   const showNoResults = useMemo(() => !!debounced?.length && !searchUsers?.length, [debounced, searchUsers])

   const searchUsersAction = useCallback(async (search: string) => {
      if (!search?.length) return;

      setLoading(true);
      const res = await fetch(`/api/user/search?search=${encodeURIComponent(search)}&limit=${encodeURIComponent(10)}`).then(r => r.json());
      setSearchUsers(res.users.filter(u => u.id !== session.data?.user?.id));
      setLoading(false);

   }, [session]);

   useEffect(() => {
      if (!debounced?.length) {
         setSearchUsers([])
         return
      }

      (async () => await searchUsersAction(debounced))();
   }, [debounced]);

   return (
      <div className={`flex-1 text-center flex items-center gap-4 justify-center relative`}>
         <div className={`!w-fit relative`}>
            {loading ? (
               <div className={`absolute left-3 top-1/2 text-accent -translate-y-1/2`}>
                  <LoadingSpinner size={14} text={``} />
               </div>
            ) : (
               <Search size={14} className={`absolute left-3 top-1/2 text-accent -translate-y-1/2`} />
            )}
            {!!value?.length && (
               <div onClick={_ => setValue(``)} title={`Clear`}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer group`}>
                  <X size={14} className={`text-secondary group-hover:!opacity-80`} />
               </div>
            )}
            <Input
               onFocus={_ => setInputFocused(true)}
               onBlur={e=> {
                  if(e.relatedTarget?.tagName.toLowerCase() === `a`) return
                  setInputFocused(false);
               }}
               onChange={e => setValue(e.target.value)} value={value} placeholder={`Search users ...`}
               className={`w-[300px] !bg-secondary-bg/50 pl-9 rounded-xl`} />
            <AnimatePresence>
            {(!!searchUsers?.length && inputFocused) && (
                  <motion.div
                     key={`search-results`}
                     className={`absolute !w-full bottom-0 left-0 translate-y-[100%] p-2 rounded-md !bg-secondary-bg flex flex-col items-start gap-1 z-10 cursor-pointer hover;!bg-secondary transition-all duration-200 text-sm`}>
                     {searchUsers.map((user, index) => <UserSearchRow key={user.id} user={user} />)}
                  </motion.div>
               )}

               {showNoResults && (
                  <motion.div
                     key={`no-results`}
                     className={`absolute !w-full bottom-0 left-0 translate-y-[100%] p-2 rounded-md !bg-secondary-bg flex flex-col items-start gap-1 z-10 cursor-pointer hover;!bg-secondary transition-all duration-200 text-sm`}>
                     <div>No users found.</div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default SearchInput;