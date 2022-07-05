-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventType" TEXT,
    "eventDate" TEXT,
    "eventYear" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sandbox" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "interests" TEXT,

    CONSTRAINT "Sandbox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "id" TEXT NOT NULL,
    "eventId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "phone" TEXT,
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
    "actor" TEXT,
    "artist" TEXT,
    "boardOfDirectors" TEXT,
    "dataScience" TEXT,
    "dbMgmt" TEXT,
    "editor" TEXT,
    "professor" TEXT,
    "trainer" TEXT,
    "fundraising" TEXT,
    "graphicDesign" TEXT,
    "hr" TEXT,
    "it" TEXT,
    "legal" TEXT,
    "linguist" TEXT,
    "msgComms" TEXT,
    "musician" TEXT,
    "newsletterCreateDesign" TEXT,
    "newsletterWrite" TEXT,
    "nonprofMgmt" TEXT,
    "pr" TEXT,
    "publicSpeak" TEXT,
    "recruitment" TEXT,
    "research" TEXT,
    "otherLanguage" TEXT,
    "socialMediaContentCreate" TEXT,
    "socialMediaMgmt" TEXT,
    "speechWriter" TEXT,
    "strategicPlanning" TEXT,
    "videoEditCreate" TEXT,
    "volMgmt" TEXT,
    "webDesign" TEXT,
    "webMgmt" TEXT,
    "anythingElse" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToVolunteer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_eventName_key" ON "Event"("eventName");

-- CreateIndex
CREATE UNIQUE INDEX "Sandbox_email_key" ON "Sandbox"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToVolunteer_AB_unique" ON "_EventToVolunteer"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToVolunteer_B_index" ON "_EventToVolunteer"("B");

-- AddForeignKey
ALTER TABLE "_EventToVolunteer" ADD CONSTRAINT "_EventToVolunteer_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToVolunteer" ADD CONSTRAINT "_EventToVolunteer_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
