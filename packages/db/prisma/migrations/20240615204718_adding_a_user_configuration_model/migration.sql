-- CreateEnum
CREATE TYPE "RunDifficulty" AS ENUM ('NORMAL', 'EXPERT', 'MASTER');

-- CreateEnum
CREATE TYPE "ConfidenceMode" AS ENUM ('ON', 'OFF', 'MAX');

-- CreateEnum
CREATE TYPE "CaretSmoothness" AS ENUM ('OFF', 'SLOW', 'MEDIUM', 'FAST');

-- CreateEnum
CREATE TYPE "CaretStyle" AS ENUM ('OFF', 'CURSOR', 'BLOCK', 'BLOCK_FILLED', 'UNDERSCORE');

-- CreateEnum
CREATE TYPE "ShowAverage" AS ENUM ('OFF', 'SPEED', 'ACC', 'BOTH');

-- CreateEnum
CREATE TYPE "IndicateTypos" AS ENUM ('OFF', 'BELOW', 'REPLACE');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "userConfigurationId" TEXT;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "userConfigurationId" TEXT;

-- AlterTable
ALTER TABLE "Tag" ADD COLUMN     "userConfigurationId" TEXT;

-- AlterTable
ALTER TABLE "TypingRun" ADD COLUMN     "userConfigurationId" TEXT;

-- CreateTable
CREATE TABLE "UserConfiguration" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "test_difficulty" "RunDifficulty" NOT NULL DEFAULT 'NORMAL',
    "blind_mode" BOOLEAN NOT NULL DEFAULT false,
    "input_freedom_mode" BOOLEAN NOT NULL DEFAULT false,
    "input_confidence_mode" "ConfidenceMode" NOT NULL DEFAULT 'OFF',
    "input_indicate_typos" "IndicateTypos" NOT NULL DEFAULT 'OFF',
    "sound_click_sound" TEXT,
    "sound_error_sound" TEXT,
    "caret_smoothness" "CaretSmoothness" NOT NULL DEFAULT 'OFF',
    "caret_style" "CaretStyle" NOT NULL DEFAULT 'OFF',
    "pace_caret_style" "CaretStyle" NOT NULL DEFAULT 'OFF',
    "theme_flip_colors" BOOLEAN NOT NULL DEFAULT false,
    "theme_colorful_mode" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_key_tips" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_oof_warning" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_caps_lock_warning" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_average" "ShowAverage" NOT NULL DEFAULT 'OFF',
    "language" TEXT NOT NULL DEFAULT 'en-US',
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserConfiguration_userId_key" ON "UserConfiguration"("userId");

-- AddForeignKey
ALTER TABLE "UserConfiguration" ADD CONSTRAINT "UserConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
