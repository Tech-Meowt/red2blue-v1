/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Volunteer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");
