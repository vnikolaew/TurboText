/*
  Warnings:

  - You are about to drop the column `metaData` on the `UserExperience` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UsersChallengeMatchState" AS ENUM ('Pending', 'Accepted', 'Rejected', 'Started');

-- CreateEnum
CREATE TYPE "PaceCaretSpeed" AS ENUM ('OFF', 'AVG', 'PB', 'LAST', 'DAILY', 'CUSTOM');

-- AlterTable
ALTER TABLE "UserConfiguration" ADD COLUMN     "font_family" TEXT NOT NULL DEFAULT 'SFMono',
ADD COLUMN     "font_size" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "pace_caret_speed" "PaceCaretSpeed" NOT NULL DEFAULT 'OFF',
ADD COLUMN     "theme" TEXT NOT NULL DEFAULT 'dark',
ALTER COLUMN "language" SET DEFAULT 'English';

-- AlterTable
ALTER TABLE "UserExperience" DROP COLUMN "metaData",
ADD COLUMN     "metadata" JSONB DEFAULT 'null',
ALTER COLUMN "points" SET DEFAULT 0,
ALTER COLUMN "level" SET DEFAULT 1;

-- CreateTable
CREATE TABLE "UsersChallengeMatch" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userOneId" TEXT NOT NULL,
    "userTwoId" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "state" "UsersChallengeMatchState" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersChallengeMatch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersChallengeMatch" ADD CONSTRAINT "UsersChallengeMatch_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallengeMatch" ADD CONSTRAINT "UsersChallengeMatch_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
