/*
  Warnings:

  - You are about to drop the column `objectID` on the `Sandbox` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sandbox" DROP COLUMN "objectID";

-- CreateTable
CREATE TABLE "ObjectIDs" (
    "id" TEXT NOT NULL,
    "algoliaID" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "interests" TEXT,

    CONSTRAINT "ObjectIDs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ObjectIDsToSandbox" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ObjectIDs_email_key" ON "ObjectIDs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ObjectIDsToSandbox_AB_unique" ON "_ObjectIDsToSandbox"("A", "B");

-- CreateIndex
CREATE INDEX "_ObjectIDsToSandbox_B_index" ON "_ObjectIDsToSandbox"("B");

-- AddForeignKey
ALTER TABLE "_ObjectIDsToSandbox" ADD CONSTRAINT "_ObjectIDsToSandbox_A_fkey" FOREIGN KEY ("A") REFERENCES "ObjectIDs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObjectIDsToSandbox" ADD CONSTRAINT "_ObjectIDsToSandbox_B_fkey" FOREIGN KEY ("B") REFERENCES "Sandbox"("id") ON DELETE CASCADE ON UPDATE CASCADE;
