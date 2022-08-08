/*
  Warnings:

  - You are about to drop the `NumEvents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NumEventsToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NumEventsToVolunteer" DROP CONSTRAINT "_NumEventsToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_NumEventsToVolunteer" DROP CONSTRAINT "_NumEventsToVolunteer_B_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "numEventsAttended" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "NumEvents";

-- DropTable
DROP TABLE "_NumEventsToVolunteer";
