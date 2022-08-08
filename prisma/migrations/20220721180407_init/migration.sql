/*
  Warnings:

  - The `numPostcards` column on the `PostcardEventAttendee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `PostcardEventAttendee` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PostcardEventAttendee" DROP COLUMN "numPostcards",
ADD COLUMN     "numPostcards" INTEGER[];

-- CreateTable
CREATE TABLE "_PostcardEventAttendeeToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostcardEventAttendeeToVolunteer_AB_unique" ON "_PostcardEventAttendeeToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_PostcardEventAttendeeToVolunteer_B_index" ON "_PostcardEventAttendeeToVolunteer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "PostcardEventAttendee_email_key" ON "PostcardEventAttendee"("email");

-- AddForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" ADD CONSTRAINT "_PostcardEventAttendeeToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardEventAttendeeToVolunteer" ADD CONSTRAINT "_PostcardEventAttendeeToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
