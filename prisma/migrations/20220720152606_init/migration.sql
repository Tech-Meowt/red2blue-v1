/*
  Warnings:

  - You are about to drop the column `numEventsAttended` on the `Volunteer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "numEventsAttended",
ADD COLUMN     "eventId" TEXT;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Volunteer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
