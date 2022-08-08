/*
  Warnings:

  - You are about to drop the `NumPostcards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventToNumPostcards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_NumPostcardsToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToNumPostcards" DROP CONSTRAINT "_EventToNumPostcards_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToNumPostcards" DROP CONSTRAINT "_EventToNumPostcards_B_fkey";

-- DropForeignKey
ALTER TABLE "_NumPostcardsToVolunteer" DROP CONSTRAINT "_NumPostcardsToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_NumPostcardsToVolunteer" DROP CONSTRAINT "_NumPostcardsToVolunteer_B_fkey";

-- DropTable
DROP TABLE "NumPostcards";

-- DropTable
DROP TABLE "_EventToNumPostcards";

-- DropTable
DROP TABLE "_NumPostcardsToVolunteer";
