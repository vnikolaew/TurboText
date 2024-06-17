/*
  Warnings:

  - Added the required column `flags` to the `TypingRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypingRun" ADD COLUMN     "flags" INTEGER NOT NULL;
