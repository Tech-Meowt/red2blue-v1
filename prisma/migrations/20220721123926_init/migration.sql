/*
  Warnings:

  - You are about to drop the column `eventName` on the `PostcardEventAttendee` table. All the data in the column will be lost.
  - You are about to drop the column `postcardEventId` on the `Volunteer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_postcardEventId_fkey";

-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "eventName";

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "postcardEventId";

-- CreateTable
CREATE TABLE "_EventToPostcardEventAttendee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostcardEventAttendeeToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPostcardEventAttendee_AB_unique" ON "_EventToPostcardEventAttendee"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPostcardEventAttendee_B_index" ON "_EventToPostcardEventAttendee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostcardEventAttendeeToVolunteer_AB_unique" ON "_PostcardEventAttendeeToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_PostcardEventAttendeeToVolunteer_B_index" ON "_PostcardEventAttendeeToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" ADD CONSTRAINT "_EventToPostcardEventAttendee_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" ADD CONSTRAINT "_EventToPostcardEventAttendee_B_fkey" FOREIGN KEY ("B") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" ADD CONSTRAINT "_PostcardEventAttendeeToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" ADD CONSTRAINT "_PostcardEventAttendeeToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
