/*
  Warnings:

  - You are about to drop the column `isActive` on the `quarters` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "quarters_isActive_idx";

-- AlterTable
ALTER TABLE "quarters" DROP COLUMN "isActive";
