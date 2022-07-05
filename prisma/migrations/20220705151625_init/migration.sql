/*
  Warnings:

  - You are about to drop the column `eventId` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Volunteer` table. All the data in the column will be lost.
  - Made the column `eventType` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `eventYear` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Event_eventName_key";

-- DropIndex
DROP INDEX "Volunteer_email_key";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "eventType" SET NOT NULL,
ALTER COLUMN "eventYear" SET NOT NULL;

-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "eventId",
DROP COLUMN "updatedAt";
