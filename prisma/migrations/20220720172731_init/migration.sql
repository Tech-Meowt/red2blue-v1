/*
  Warnings:

  - You are about to drop the column `attendedEvents` on the `Volunteer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "attendedEvents";

-- CreateTable
CREATE TABLE "NumOfEvents" (
    "id" TEXT NOT NULL,

    CONSTRAINT "NumOfEvents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToNumOfEvents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToNumOfEvents_AB_unique" ON "_EventToNumOfEvents"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToNumOfEvents_B_index" ON "_EventToNumOfEvents"("B");

-- AddForeignKey
ALTER TABLE "_EventToNumOfEvents" ADD CONSTRAINT "_EventToNumOfEvents_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToNumOfEvents" ADD CONSTRAINT "_EventToNumOfEvents_B_fkey" FOREIGN KEY ("B") REFERENCES "NumOfEvents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
