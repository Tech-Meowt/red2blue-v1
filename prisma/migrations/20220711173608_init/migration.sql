/*
  Warnings:

  - You are about to drop the column `city` on the `Sandbox` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `Sandbox` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sandbox" DROP COLUMN "city",
DROP COLUMN "street",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
