/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `PoliticalSkills` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PoliticalSkills" ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "volunteerId" TEXT,
ALTER COLUMN "campaignMgmt" SET DEFAULT '',
ALTER COLUMN "canvassing" SET DEFAULT '',
ALTER COLUMN "communityOrganizing" SET DEFAULT '',
ALTER COLUMN "electedOfficialCurr" SET DEFAULT '',
ALTER COLUMN "electedOfficialPast" SET DEFAULT '',
ALTER COLUMN "p2pTextingMgmt" SET DEFAULT '',
ALTER COLUMN "p2pTextingVol" SET DEFAULT '',
ALTER COLUMN "phonebanking" SET DEFAULT '',
ALTER COLUMN "pollWorker" SET DEFAULT '',
ALTER COLUMN "postcardMgmt" SET DEFAULT '',
ALTER COLUMN "postcardWriting" SET DEFAULT '',
ALTER COLUMN "txtPhoneScriptEdit" SET DEFAULT '',
ALTER COLUMN "txtPhoneScriptWrite" SET DEFAULT '',
ALTER COLUMN "vanVoteBuildExp" SET DEFAULT '',
ALTER COLUMN "voterReg" SET DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "PoliticalSkills_email_key" ON "PoliticalSkills"("email");
