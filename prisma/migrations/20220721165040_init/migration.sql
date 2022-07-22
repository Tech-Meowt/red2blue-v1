/*
  Warnings:

  - You are about to drop the column `eventName` on the `PostcardEventAttendee` table. All the data in the column will be lost.
  - You are about to drop the column `numPostcards` on the `PostcardEventAttendee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "eventName",
DROP COLUMN "numPostcards";

-- CreateTable
CREATE TABLE "PostcardCount" (
    "id" TEXT NOT NULL,
    "numPostcards" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "PostcardCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToPostcardCount" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostcardCountToPostcardEventAttendee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PostcardCountToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPostcardCount_AB_unique" ON "_EventToPostcardCount"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPostcardCount_B_index" ON "_EventToPostcardCount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostcardCountToPostcardEventAttendee_AB_unique" ON "_PostcardCountToPostcardEventAttendee"("A", "B");

-- CreateIndex
CREATE INDEX "_PostcardCountToPostcardEventAttendee_B_index" ON "_PostcardCountToPostcardEventAttendee"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PostcardCountToVolunteer_AB_unique" ON "_PostcardCountToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_PostcardCountToVolunteer_B_index" ON "_PostcardCountToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_EventToPostcardCount" ADD CONSTRAINT "_EventToPostcardCount_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPostcardCount" ADD CONSTRAINT "_EventToPostcardCount_B_fkey" FOREIGN KEY ("B") REFERENCES "PostcardCount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardCountToPostcardEventAttendee" ADD CONSTRAINT "_PostcardCountToPostcardEventAttendee_A_fkey" FOREIGN KEY ("A") REFERENCES "PostcardCount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardCountToPostcardEventAttendee" ADD CONSTRAINT "_PostcardCountToPostcardEventAttendee_B_fkey" FOREIGN KEY ("B") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardCountToVolunteer" ADD CONSTRAINT "_PostcardCountToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "PostcardCount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardCountToVolunteer" ADD CONSTRAINT "_PostcardCountToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
