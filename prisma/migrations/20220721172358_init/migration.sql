/*
  Warnings:

  - You are about to drop the `_PostcardEventAttendeeToVolunteer` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `firstName` on table `PostcardEventAttendee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `PostcardEventAttendee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `PostcardEventAttendee` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventName` on table `PostcardEventAttendee` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" DROP CONSTRAINT "_PostcardEventAttendeeToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" DROP CONSTRAINT "_PostcardEventAttendeeToVolunteer_B_fkey";

-- DropIndex
DROP INDEX "PostcardEventAttendee_email_key";

-- AlterTable
ALTER TABLE "PostcardEventAttendee" ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "eventName" SET NOT NULL;

-- DropTable
DROP TABLE "_PostcardEventAttendeeToVolunteer";
