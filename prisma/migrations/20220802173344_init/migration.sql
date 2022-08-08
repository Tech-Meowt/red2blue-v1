/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `PoliticalSkills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PoliticalSkills_email_key" ON "PoliticalSkills"("email");
