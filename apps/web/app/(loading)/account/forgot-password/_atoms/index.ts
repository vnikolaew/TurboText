"use client"
import { atom } from "jotai";

export const resetPasswordEmailAtom = atom(``)
resetPasswordEmailAtom.debugLabel = `resetPasswordEmailAtom`;

export const resetPasswordStepAtom = atom(1)
resetPasswordStepAtom.debugLabel = `resetPasswordStepAtom`;

export const resetPasswordCodeAtom = atom(``)
resetPasswordCodeAtom.debugLabel = `resetPasswordCodeAtom`;
