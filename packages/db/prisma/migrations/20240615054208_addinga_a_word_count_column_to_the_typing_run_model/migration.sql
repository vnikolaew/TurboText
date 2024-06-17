-- AlterTable
ALTER TABLE "TypingRun" ADD COLUMN     "wordCount" INTEGER,
ALTER COLUMN "time" DROP NOT NULL;
