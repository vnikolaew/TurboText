/*
  Warnings:

  - You are about to drop the column `userConfigurationId` on the `TypingRun` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TypingRun" DROP COLUMN "userConfigurationId";

-- AlterTable
ALTER TABLE "UserConfiguration" ADD COLUMN     "auto_save_mode" BOOLEAN NOT NULL DEFAULT false;
