/*
  Warnings:

  - You are about to drop the column `description` on the `flds` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AwarenessProgram" ADD COLUMN     "remarks" VARCHAR(300);

-- AlterTable
ALTER TABLE "flds" DROP COLUMN "description",
ADD COLUMN     "remarks" VARCHAR(300);
