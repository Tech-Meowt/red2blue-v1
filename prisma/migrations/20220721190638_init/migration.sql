/*
  Warnings:

  - You are about to drop the `_EventToPostcardEventAttendee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" DROP CONSTRAINT "_EventToPostcardEventAttendee_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToPostcardEventAttendee" DROP CONSTRAINT "_EventToPostcardEventAttendee_B_fkey";

-- DropTable
DROP TABLE "_EventToPostcardEventAttendee";

-- CreateTable
CREATE TABLE "_EventToNumPostcards" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_NumPostcardsToPostcardEventAttendee" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToNumPostcards_AB_unique" ON "_EventToNumPostcards"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToNumPostcards_B_index" ON "_EventToNumPostcards"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NumPostcardsToPostcardEventAttendee_AB_unique" ON "_NumPostcardsToPostcardEventAttendee"("A", "B");

-- CreateIndex
CREATE INDEX "_NumPostcardsToPostcardEventAttendee_B_index" ON "_NumPostcardsToPostcardEventAttendee"("B");

-- AddForeignKey
ALTER TABLE "_EventToNumPostcards" ADD CONSTRAINT "_EventToNumPostcards_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToNumPostcards" ADD CONSTRAINT "_EventToNumPostcards_B_fkey" FOREIGN KEY ("B") REFERENCES "NumPostcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumPostcardsToPostcardEventAttendee" ADD CONSTRAINT "_NumPostcardsToPostcardEventAttendee_A_fkey" FOREIGN KEY ("A") REFERENCES "NumPostcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NumPostcardsToPostcardEventAttendee" ADD CONSTRAINT "_NumPostcardsToPostcardEventAttendee_B_fkey" FOREIGN KEY ("B") REFERENCES "PostcardEventAttendee"("id") ON DELETE CASCADE ON UPDATE CASCADE;
