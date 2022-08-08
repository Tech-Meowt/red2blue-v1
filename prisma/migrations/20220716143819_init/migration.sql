-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_userId_fkey";

-- CreateTable
CREATE TABLE "_UserToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToVolunteer_AB_unique" ON "_UserToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToVolunteer_B_index" ON "_UserToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_UserToVolunteer" ADD CONSTRAINT "_UserToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVolunteer" ADD CONSTRAINT "_UserToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
