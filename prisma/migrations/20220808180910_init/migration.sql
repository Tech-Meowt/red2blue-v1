/*
  Warnings:

  - You are about to drop the column `actor` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `anythingElse` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `artist` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `boardOfDirectors` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `campaignMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `canvassing` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `communityOrganizing` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `dataScience` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `dbMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `editor` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `electedOfficialCurr` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `electedOfficialPast` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `fundraising` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `graphicDesign` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `hr` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `it` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `legal` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `linguist` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `msgComms` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `musician` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `newsletterCreateDesign` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `newsletterWrite` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `nonprofMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `otherLanguage` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `p2pTextingMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `p2pTextingVol` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `phonebanking` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `pollWorker` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `postcardMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `postcardWriting` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `pr` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `professor` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `publicSpeak` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `recruitment` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `research` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `socialMediaContentCreate` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `socialMediaMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `speechWriter` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `strategicPlanning` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `trainer` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `txtPhoneScriptEdit` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `txtPhoneScriptWrite` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `vanVoteBuildExp` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `videoEditCreate` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `volMgmt` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `voterReg` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `webDesign` on the `Volunteer` table. All the data in the column will be lost.
  - You are about to drop the column `webMgmt` on the `Volunteer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volunteer" DROP COLUMN "actor",
DROP COLUMN "anythingElse",
DROP COLUMN "artist",
DROP COLUMN "boardOfDirectors",
DROP COLUMN "campaignMgmt",
DROP COLUMN "canvassing",
DROP COLUMN "communityOrganizing",
DROP COLUMN "dataScience",
DROP COLUMN "dbMgmt",
DROP COLUMN "editor",
DROP COLUMN "electedOfficialCurr",
DROP COLUMN "electedOfficialPast",
DROP COLUMN "fundraising",
DROP COLUMN "graphicDesign",
DROP COLUMN "hr",
DROP COLUMN "it",
DROP COLUMN "legal",
DROP COLUMN "linguist",
DROP COLUMN "msgComms",
DROP COLUMN "musician",
DROP COLUMN "newsletterCreateDesign",
DROP COLUMN "newsletterWrite",
DROP COLUMN "nonprofMgmt",
DROP COLUMN "otherLanguage",
DROP COLUMN "p2pTextingMgmt",
DROP COLUMN "p2pTextingVol",
DROP COLUMN "phonebanking",
DROP COLUMN "pollWorker",
DROP COLUMN "postcardMgmt",
DROP COLUMN "postcardWriting",
DROP COLUMN "pr",
DROP COLUMN "professor",
DROP COLUMN "publicSpeak",
DROP COLUMN "recruitment",
DROP COLUMN "research",
DROP COLUMN "socialMediaContentCreate",
DROP COLUMN "socialMediaMgmt",
DROP COLUMN "speechWriter",
DROP COLUMN "strategicPlanning",
DROP COLUMN "trainer",
DROP COLUMN "txtPhoneScriptEdit",
DROP COLUMN "txtPhoneScriptWrite",
DROP COLUMN "vanVoteBuildExp",
DROP COLUMN "videoEditCreate",
DROP COLUMN "volMgmt",
DROP COLUMN "voterReg",
DROP COLUMN "webDesign",
DROP COLUMN "webMgmt";
