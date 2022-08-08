-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "volId" TEXT;

-- CreateTable
CREATE TABLE "PoliticalSkills" (
    "id" TEXT NOT NULL,
    "campaignMgmt" TEXT,
    "canvassing" TEXT,
    "communityOrganizing" TEXT,
    "electedOfficialCurr" TEXT,
    "electedOfficialPast" TEXT,
    "p2pTextingMgmt" TEXT,
    "p2pTextingVol" TEXT,
    "phonebanking" TEXT,
    "pollWorker" TEXT,
    "postcardMgmt" TEXT,
    "postcardWriting" TEXT,
    "txtPhoneScriptEdit" TEXT,
    "txtPhoneScriptWrite" TEXT,
    "vanVoteBuildExp" TEXT,
    "voterReg" TEXT,

    CONSTRAINT "PoliticalSkills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_volId_fkey" FOREIGN KEY ("volId") REFERENCES "PoliticalSkills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
