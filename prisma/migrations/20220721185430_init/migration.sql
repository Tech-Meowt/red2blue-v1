/*
  Warnings:

  - You are about to drop the column `eventName` on the `PostcardEventAttendee` table. All the data in the column will be lost.
  - You are about to drop the column `numPostcards` on the `PostcardEventAttendee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "eventName",
DROP COLUMN "numPostcards";

-- CreateTable
CREATE TABLE "NumPostcards" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NumPostcards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NumPostcardsToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NumPostcards_email_key" ON "NumPostcards"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_NumPostcardsToVolunteer_AB_unique" ON "_NumPostcardsToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_NumPostcardsToVolunteer_B_index" ON "_NumPostcardsToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_NumPostcardsToVolunteer" ADD CONSTRAINT "_NumPostcardsToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "NumPostcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumPostcardsToVolunteer" ADD CONSTRAINT "_NumPostcardsToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
