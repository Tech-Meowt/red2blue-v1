/*
  Warnings:

  - You are about to drop the `_PoliticalSkillsToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PoliticalSkillsToVolunteer" DROP CONSTRAINT "_PoliticalSkillsToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_PoliticalSkillsToVolunteer" DROP CONSTRAINT "_PoliticalSkillsToVolunteer_B_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "skillId" TEXT;

-- DropTable
DROP TABLE "_PoliticalSkillsToVolunteer";

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "PoliticalSkills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
