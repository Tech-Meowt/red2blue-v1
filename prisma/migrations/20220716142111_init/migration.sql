-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_userId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
