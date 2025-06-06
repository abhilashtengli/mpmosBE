/*
  Warnings:

  - A unique constraint covering the columns `[awarnessprogramId]` on the table `AwarenessProgram` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fldId]` on the table `flds` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[InfraDevId]` on the table `infrastructure_developments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[inputDistId]` on the table `input_distributions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[trainingId]` on the table `trainings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AwarenessProgram" DROP CONSTRAINT "AwarenessProgram_project_id_fkey";

-- DropForeignKey
ALTER TABLE "AwarenessProgram" DROP CONSTRAINT "AwarenessProgram_quarter_id_fkey";

-- DropForeignKey
ALTER TABLE "flds" DROP CONSTRAINT "flds_project_id_fkey";

-- DropForeignKey
ALTER TABLE "flds" DROP CONSTRAINT "flds_quarter_id_fkey";

-- DropForeignKey
ALTER TABLE "infrastructure_developments" DROP CONSTRAINT "infrastructure_developments_project_id_fkey";

-- DropForeignKey
ALTER TABLE "infrastructure_developments" DROP CONSTRAINT "infrastructure_developments_quarter_id_fkey";

-- DropForeignKey
ALTER TABLE "input_distributions" DROP CONSTRAINT "input_distributions_project_id_fkey";

-- DropForeignKey
ALTER TABLE "input_distributions" DROP CONSTRAINT "input_distributions_quarter_id_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_project_id_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_quarter_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "AwarenessProgram_awarnessprogramId_key" ON "AwarenessProgram"("awarnessprogramId");

-- CreateIndex
CREATE UNIQUE INDEX "flds_fldId_key" ON "flds"("fldId");

-- CreateIndex
CREATE UNIQUE INDEX "infrastructure_developments_InfraDevId_key" ON "infrastructure_developments"("InfraDevId");

-- CreateIndex
CREATE UNIQUE INDEX "input_distributions_inputDistId_key" ON "input_distributions"("inputDistId");

-- CreateIndex
CREATE UNIQUE INDEX "trainings_trainingId_key" ON "trainings"("trainingId");

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
