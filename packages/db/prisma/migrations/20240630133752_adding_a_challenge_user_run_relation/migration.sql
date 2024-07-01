-- AlterTable
ALTER TABLE "UsersChallenge" ADD COLUMN     "userOneRunId" UUID,
ADD COLUMN     "userTwoRunId" UUID;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userOneRunId_fkey" FOREIGN KEY ("userOneRunId") REFERENCES "TypingRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userTwoRunId_fkey" FOREIGN KEY ("userTwoRunId") REFERENCES "TypingRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;
