/*
  Warnings:

  - You are about to drop the `NumOfEvents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NumOfEventsToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NumOfEventsToVolunteer" DROP CONSTRAINT "_NumOfEventsToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_NumOfEventsToVolunteer" DROP CONSTRAINT "_NumOfEventsToVolunteer_B_fkey";

-- DropTable
DROP TABLE "NumOfEvents";

-- DropTable
DROP TABLE "_NumOfEventsToVolunteer";
