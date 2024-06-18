/*
  Warnings:

  - Added the required column `totalTimeMilliseconds` to the `TypingRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypingRun" ADD COLUMN     "totalTimeMilliseconds" INTEGER NOT NULL;
