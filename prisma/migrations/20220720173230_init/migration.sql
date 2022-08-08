/*
  Warnings:

  - You are about to drop the `NumOfEvents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToNumOfEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToNumOfEvents" DROP CONSTRAINT "_EventToNumOfEvents_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToNumOfEvents" DROP CONSTRAINT "_EventToNumOfEvents_B_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "eventsAttended" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "NumOfEvents";

-- DropTable
DROP TABLE "_EventToNumOfEvents";
