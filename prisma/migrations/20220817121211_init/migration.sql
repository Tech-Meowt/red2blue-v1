/*
  Warnings:

  - You are about to drop the column `skillDb` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "skillDb",
ADD COLUMN     "skillsDb" BOOLEAN NOT NULL DEFAULT false;
