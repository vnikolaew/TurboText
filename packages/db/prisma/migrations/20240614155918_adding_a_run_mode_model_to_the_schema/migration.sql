/*
  Warnings:

  - Added the required column `mode` to the `TypingRun` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypingRunMode" AS ENUM ('TIME', 'WORDS');

-- AlterTable
ALTER TABLE "TypingRun" ADD COLUMN     "mode" "TypingRunMode" NOT NULL;
