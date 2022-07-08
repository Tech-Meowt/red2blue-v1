/*
  Warnings:

  - You are about to drop the `ObjectIDs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ObjectIDsToSandbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ObjectIDsToSandbox" DROP CONSTRAINT "_ObjectIDsToSandbox_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObjectIDsToSandbox" DROP CONSTRAINT "_ObjectIDsToSandbox_B_fkey";

-- AlterTable
ALTER TABLE "Sandbox" ADD COLUMN     "objectID" TEXT;

-- DropTable
DROP TABLE "ObjectIDs";

-- DropTable
DROP TABLE "_ObjectIDsToSandbox";
