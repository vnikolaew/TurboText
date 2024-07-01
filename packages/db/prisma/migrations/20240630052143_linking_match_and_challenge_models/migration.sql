/*
  Warnings:

  - Added the required column `matchId` to the `UsersChallenge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsersChallenge" ADD COLUMN     "matchId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "UsersChallengeMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;
