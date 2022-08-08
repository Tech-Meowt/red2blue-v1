/*
  Warnings:

  - You are about to drop the `_EventToPostcardEventAttendee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" DROP CONSTRAINT "_EventToPostcardEventAttendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" DROP CONSTRAINT "_EventToPostcardEventAttendee_B_fkey";

-- DropTable
DROP TABLE "_EventToPostcardEventAttendee";

-- AddForeignKey
ALTER TABLE "PostcardEventAttendee" ADD CONSTRAINT "PostcardEventAttendee_nameOfEvent_fkey" FOREIGN KEY ("nameOfEvent") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
