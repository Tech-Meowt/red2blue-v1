/*
  Warnings:

  - You are about to drop the `PostcardEventAttendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NumPostcardsToPostcardEventAttendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostcardEventAttendeeToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NumPostcardsToPostcardEventAttendee" DROP CONSTRAINT "_NumPostcardsToPostcardEventAttendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_NumPostcardsToPostcardEventAttendee" DROP CONSTRAINT "_NumPostcardsToPostcardEventAttendee_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" DROP CONSTRAINT "_PostcardEventAttendeeToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" DROP CONSTRAINT "_PostcardEventAttendeeToVolunteer_B_fkey";

-- AlterTable
ALTER TABLE "NumPostcards" ADD COLUMN     "objectID" TEXT;

-- DropTable
DROP TABLE "PostcardEventAttendee";

-- DropTable
DROP TABLE "_NumPostcardsToPostcardEventAttendee";

-- DropTable
DROP TABLE "_PostcardEventAttendeeToVolunteer";
