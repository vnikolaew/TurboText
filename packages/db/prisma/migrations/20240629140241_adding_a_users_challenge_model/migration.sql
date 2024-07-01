-- CreateEnum
CREATE TYPE "UsersChallengeState" AS ENUM ('Pending', 'Playing', 'Finished', 'Stopped');

-- AlterEnum
ALTER TYPE "UsersChallengeMatchState" ADD VALUE 'HalfAccepted';

-- CreateTable
CREATE TABLE "UsersChallenge" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userOneId" TEXT NOT NULL,
    "userTwoId" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "state" "UsersChallengeState" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersChallenge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
