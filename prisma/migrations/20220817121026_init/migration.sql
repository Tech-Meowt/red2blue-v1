-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sandboxDb" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "skillDb" BOOLEAN NOT NULL DEFAULT false;
