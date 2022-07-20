/*
  Warnings:

  - You are about to drop the column `eventId` on the `Volunteer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Volunteer" DROP CONSTRAINT "Volunteer_eventId_fkey";

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "eventId";
