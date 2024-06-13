-- CreateTable
CREATE TABLE "TypingRun" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "typedLetters" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypingRun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TypingRun" ADD CONSTRAINT "TypingRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
