/*
  Warnings:

  - You are about to drop the `_EventToNumOfEvents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToNumOfEvents" DROP CONSTRAINT "_EventToNumOfEvents_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToNumOfEvents" DROP CONSTRAINT "_EventToNumOfEvents_B_fkey";

-- DropTable
DROP TABLE "_EventToNumOfEvents";

-- CreateTable
CREATE TABLE "_NumOfEventsToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NumOfEventsToVolunteer_AB_unique" ON "_NumOfEventsToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_NumOfEventsToVolunteer_B_index" ON "_NumOfEventsToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_NumOfEventsToVolunteer" ADD CONSTRAINT "_NumOfEventsToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "NumOfEvents"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumOfEventsToVolunteer" ADD CONSTRAINT "_NumOfEventsToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
