/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `PostcardEventAttendee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PostcardEventAttendee_email_key" ON "PostcardEventAttendee"("email");
