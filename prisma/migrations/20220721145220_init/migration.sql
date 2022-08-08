/*
  Warnings:

  - Added the required column `nameOfEvent` to the `PostcardEventAttendee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PostcardEventAttendee" ADD COLUMN     "nameOfEvent" TEXT NOT NULL;
