/*
  Warnings:

  - You are about to drop the column `userConfigurationId` on the `TypingRun` table. All the data in the column will be lost.
  - Added the required column `totalTimeMilliseconds` to the `TypingRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- ALTER TABLE "TypingRun" DROP COLUMN "userConfigurationId",
-- ADD COLUMN     "totalTimeMilliseconds" INTEGER NOT NULL;
