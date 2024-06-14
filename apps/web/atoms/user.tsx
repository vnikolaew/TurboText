"use client";
import { atom } from "jotai";
import { Session } from "next-auth";

export const userDataLoadingAtom = atom(true)

userDataLoadingAtom.debugLabel = `userDataLoadingAtom`;

export const userAtom = atom<Session["user"] | null>(null!)
userAtom.debugLabel = `userAtom`;
