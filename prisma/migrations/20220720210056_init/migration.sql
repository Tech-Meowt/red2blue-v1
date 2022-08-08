/*
  Warnings:

  - You are about to drop the `_EventToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToVolunteer" DROP CONSTRAINT "_EventToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToVolunteer" DROP CONSTRAINT "_EventToVolunteer_B_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "eventId" TEXT;

-- DropTable
DROP TABLE "_EventToVolunteer";

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
