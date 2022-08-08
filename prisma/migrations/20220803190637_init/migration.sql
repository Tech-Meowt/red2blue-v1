-- AlterTable
ALTER TABLE "Volunteer" ADD COLUMN     "lifeSkillId" TEXT;

-- CreateTable
CREATE TABLE "LifeSkills" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "actor" TEXT DEFAULT '',
    "artist" TEXT DEFAULT '',
    "boardOfDirectors" TEXT DEFAULT '',
    "dataScience" TEXT DEFAULT '',
    "dbMgmt" TEXT DEFAULT '',
    "editor" TEXT DEFAULT '',
    "professor" TEXT DEFAULT '',
    "trainer" TEXT DEFAULT '',
    "fundraising" TEXT DEFAULT '',
    "graphicDesign" TEXT DEFAULT '',
    "hr" TEXT DEFAULT '',
    "it" TEXT DEFAULT '',
    "legal" TEXT DEFAULT '',
    "linguist" TEXT DEFAULT '',
    "msgComms" TEXT DEFAULT '',
    "musician" TEXT DEFAULT '',
    "newsletterCreateDesign" TEXT DEFAULT '',
    "newsletterWrite" TEXT DEFAULT '',
    "nonprofMgmt" TEXT DEFAULT '',
    "pr" TEXT DEFAULT '',
    "publicSpeak" TEXT DEFAULT '',
    "recruitment" TEXT DEFAULT '',
    "research" TEXT DEFAULT '',
    "otherLanguage" TEXT DEFAULT '',
    "socialMediaContentCreate" TEXT DEFAULT '',
    "socialMediaMgmt" TEXT DEFAULT '',
    "speechWriter" TEXT DEFAULT '',
    "strategicPlanning" TEXT DEFAULT '',
    "videoEditCreate" TEXT DEFAULT '',
    "volMgmt" TEXT DEFAULT '',
    "webDesign" TEXT DEFAULT '',
    "webMgmt" TEXT DEFAULT '',
    "anythingElse" TEXT DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "volunteerId" TEXT,

    CONSTRAINT "LifeSkills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LifeSkills_email_key" ON "LifeSkills"("email");

-- AddForeignKey
ALTER TABLE "Volunteer" ADD CONSTRAINT "Volunteer_lifeSkillId_fkey" FOREIGN KEY ("lifeSkillId") REFERENCES "LifeSkills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
