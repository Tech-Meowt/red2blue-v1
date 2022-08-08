/*
  Warnings:

  - You are about to drop the column `eventId` on the `Volunteer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_eventId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "eventId";

-- CreateTable
CREATE TABLE "_EventToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToVolunteer_AB_unique" ON "_EventToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToVolunteer_B_index" ON "_EventToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_EventToVolunteer" ADD CONSTRAINT "_EventToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToVolunteer" ADD CONSTRAINT "_EventToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
