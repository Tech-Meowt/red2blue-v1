/*
  Warnings:

  - You are about to drop the column `numEvents` on the `Volunteer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "numEvents";

-- CreateTable
CREATE TABLE "NumEvents" (
    "id" TEXT NOT NULL,

    CONSTRAINT "NumEvents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NumEventsToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NumEventsToVolunteer_AB_unique" ON "_NumEventsToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_NumEventsToVolunteer_B_index" ON "_NumEventsToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_NumEventsToVolunteer" ADD CONSTRAINT "_NumEventsToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "NumEvents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumEventsToVolunteer" ADD CONSTRAINT "_NumEventsToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
