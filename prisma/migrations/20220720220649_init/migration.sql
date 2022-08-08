-- CreateTable
CREATE TABLE "Postcards" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Postcards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostcardsToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostcardsToVolunteer_AB_unique" ON "_PostcardsToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_PostcardsToVolunteer_B_index" ON "_PostcardsToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_PostcardsToVolunteer" ADD CONSTRAINT "_PostcardsToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "Postcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostcardsToVolunteer" ADD CONSTRAINT "_PostcardsToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
