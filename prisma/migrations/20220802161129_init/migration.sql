/*
  Warnings:

  - You are about to drop the column `volId` on the `Volunteer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_volId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "volId";

-- CreateTable
CREATE TABLE "_PoliticalSkillsToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PoliticalSkillsToVolunteer_AB_unique" ON "_PoliticalSkillsToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_PoliticalSkillsToVolunteer_B_index" ON "_PoliticalSkillsToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_PoliticalSkillsToVolunteer" ADD CONSTRAINT "_PoliticalSkillsToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "PoliticalSkills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PoliticalSkillsToVolunteer" ADD CONSTRAINT "_PoliticalSkillsToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
