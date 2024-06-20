/*
  Warnings:

  - You are about to drop the column `userConfigurationId` on the `TypingRun` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TypingRun" DROP COLUMN "userConfigurationId";

-- CreateTable
CREATE TABLE "UserExperience" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "metaData" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserExperience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExperience_userId_key" ON "UserExperience"("userId");

-- AddForeignKey
ALTER TABLE "UserExperience" ADD CONSTRAINT "UserExperience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
