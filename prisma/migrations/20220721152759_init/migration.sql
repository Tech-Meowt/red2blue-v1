/*
  Warnings:

  - You are about to drop the column `nameOfEvent` on the `PostcardEventAttendee` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostcardEventAttendee" DROP CONSTRAINT "PostcardEventAttendee_nameOfEvent_fkey";

-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "nameOfEvent";

-- CreateTable
CREATE TABLE "_EventToPostcardEventAttendee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPostcardEventAttendee_AB_unique" ON "_EventToPostcardEventAttendee"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPostcardEventAttendee_B_index" ON "_EventToPostcardEventAttendee"("B");

-- AddForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" ADD CONSTRAINT "_EventToPostcardEventAttendee_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" ADD CONSTRAINT "_EventToPostcardEventAttendee_B_fkey" FOREIGN KEY ("B") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
