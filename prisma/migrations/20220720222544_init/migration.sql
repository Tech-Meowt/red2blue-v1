/*
  Warnings:

  - You are about to drop the `Postcards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostcardsToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostcardsToVolunteer" DROP CONSTRAINT "_PostcardsToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardsToVolunteer" DROP CONSTRAINT "_PostcardsToVolunteer_B_fkey";

-- DropTable
DROP TABLE "Postcards";

-- DropTable
DROP TABLE "_PostcardsToVolunteer";

-- CreateTable
CREATE TABLE "PostcardEventAttendee" (
    "id" TEXT NOT NULL,
    "attendeeId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "eventName" TEXT,
    "numPostcards" INTEGER,

    CONSTRAINT "PostcardEventAttendee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostcardEventAttendee" ADD CONSTRAINT "PostcardEventAttendee_attendeeId_fkey" FOREIGN KEY ("attendeeId") REFERENCES "Volunteer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
