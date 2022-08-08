/*
  Warnings:

  - The `numPostcards` column on the `PostcardEventAttendee` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "numPostcards",
ADD COLUMN     "numPostcards" INTEGER;
