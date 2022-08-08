/*
  Warnings:

  - You are about to drop the `_UserToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserToVolunteer" DROP CONSTRAINT "_UserToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToVolunteer" DROP CONSTRAINT "_UserToVolunteer_B_fkey";

-- DropTable
DROP TABLE "_UserToVolunteer";

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
