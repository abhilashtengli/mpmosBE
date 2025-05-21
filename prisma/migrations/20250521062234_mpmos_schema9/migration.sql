/*
  Warnings:

  - Added the required column `awarnessprogramId` to the `AwarenessProgram` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fldId` to the `flds` table without a default value. This is not possible if the table is not empty.
  - Added the required column `InfraDevId` to the `infrastructure_developments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputDistId` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingId` to the `trainings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AwarenessProgram" ADD COLUMN     "awarnessprogramId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "flds" ADD COLUMN     "fldId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "infrastructure_developments" ADD COLUMN     "InfraDevId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "input_distributions" ADD COLUMN     "inputDistId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "trainings" ADD COLUMN     "trainingId" TEXT NOT NULL;
