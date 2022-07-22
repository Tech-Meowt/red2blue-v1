/*
  Warnings:

  - You are about to drop the `PostcardCount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToPostcardCount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostcardCountToPostcardEventAttendee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostcardCountToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToPostcardCount" DROP CONSTRAINT "_EventToPostcardCount_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToPostcardCount" DROP CONSTRAINT "_EventToPostcardCount_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardCountToPostcardEventAttendee" DROP CONSTRAINT "_PostcardCountToPostcardEventAttendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardCountToPostcardEventAttendee" DROP CONSTRAINT "_PostcardCountToPostcardEventAttendee_B_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardCountToVolunteer" DROP CONSTRAINT "_PostcardCountToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardCountToVolunteer" DROP CONSTRAINT "_PostcardCountToVolunteer_B_fkey";

-- AlterTable
ALTER TABLE "PostcardEventAttendee" ADD COLUMN     "eventName" TEXT,
ADD COLUMN     "numPostcards" INTEGER[];

-- DropTable
DROP TABLE "PostcardCount";

-- DropTable
DROP TABLE "_EventToPostcardCount";

-- DropTable
DROP TABLE "_PostcardCountToPostcardEventAttendee";

-- DropTable
DROP TABLE "_PostcardCountToVolunteer";
