/*
  Warnings:

  - You are about to drop the column `attendeeId` on the `PostcardEventAttendee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostcardEventAttendee" DROP CONSTRAINT "PostcardEventAttendee_attendeeId_fkey";

-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "attendeeId";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "postcardEventId" TEXT;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_postcardEventId_fkey" FOREIGN KEY ("postcardEventId") REFERENCES "PostcardEventAttendee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
