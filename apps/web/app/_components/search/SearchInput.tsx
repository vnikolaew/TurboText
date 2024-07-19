"use client";
import UserSearchRow from "@app/_components/search/UserSearchRow";
import { LoadingSpinner } from "@components/common/LoadingSpinner";
import { useBoolean } from "@hooks/useBoolean";
import useDebounce from "@hooks/useDebounce";
import { User } from "@repo/db";
import { Input } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface SearchInputProps {}

const SearchInput = ({}: SearchInputProps) => {
   const [value, setValue] = useState(``);
   const session = useSession();
   const [searchUsers, setSearchUsers] = useState<User[]>([]);

   const [loading, setLoading] = useBoolean();
   const [inputFocused, setInputFocused] = useBoolean();

   const debounced = useDebounce(value, 2_000);
   const showNoResults = useMemo(
      () => !!debounced?.length && !searchUsers?.length,
      [debounced, searchUsers]
   );

   const searchUsersAction = useCallback(
      async (search: string) => {
         if (!search?.length) return;

         setLoading(true);
         const res = await fetch(
            `/api/user/search?search=${encodeURIComponent(search)}&limit=${encodeURIComponent(10)}`
         ).then((r) => r.json());
         setSearchUsers(
            res.users.filter((u) => u.id !== session.data?.user?.id)
         );
         setLoading(false);
      },
      [session]
   );

   useEffect(() => {
      if (!debounced?.length) {
         setSearchUsers([]);
         return;
      }

      (async () => await searchUsersAction(debounced))();
   }, [debounced]);

   return (
      <div
         className={`relative flex flex-1 items-center justify-center gap-4 text-center`}
      >
         <div className={`relative !w-fit`}>
            {loading ? (
               <div
                  className={`absolute left-3 top-1/2 -translate-y-1/2 text-accent`}
               >
                  <LoadingSpinner size={14} text={``} />
               </div>
            ) : (
               <Search
                  size={14}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 text-accent`}
               />
            )}
            {!!value?.length && (
               <div
                  onClick={(_) => setValue(``)}
                  title={`Clear`}
                  className={`group absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer`}
               >
                  <X
                     size={14}
                     className={`text-secondary group-hover:!opacity-80`}
                  />
               </div>
            )}
            <Input
               onFocus={(_) => setInputFocused(true)}
               onBlur={(e) => {
                  if (e.relatedTarget?.tagName.toLowerCase() === `a`) return;
                  setInputFocused(false);
               }}
               onChange={(e) => setValue(e.target.value)}
               value={value}
               placeholder={`Search typists ...`}
               className={`w-[300px] rounded-xl !bg-secondary-bg/50 pl-9`}
            />
            <AnimatePresence>
               {!!searchUsers?.length && inputFocused && (
                  <motion.div
                     key={`search-results`}
                     className={`hover;!bg-secondary absolute bottom-0 left-0 z-10 flex !w-full translate-y-[100%] cursor-pointer flex-col items-start gap-1 rounded-md !bg-secondary-bg p-2 text-sm transition-all duration-200`}
                  >
                     {searchUsers.map((user, index) => (
                        <UserSearchRow key={user.id} user={user} />
                     ))}
                  </motion.div>
               )}

               {showNoResults && (
                  <motion.div
                     key={`no-results`}
                     className={`hover;!bg-secondary absolute bottom-0 left-0 z-10 flex !w-full translate-y-[100%] cursor-pointer flex-col items-start gap-1 rounded-md !bg-secondary-bg p-2 text-sm transition-all duration-200`}
                  >
                     <div>No users found.</div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default SearchInput;
