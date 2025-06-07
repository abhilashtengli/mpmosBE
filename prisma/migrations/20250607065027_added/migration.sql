-- DropForeignKey
ALTER TABLE "AwarenessProgram" DROP CONSTRAINT "AwarenessProgram_project_id_fkey";

-- DropForeignKey
ALTER TABLE "flds" DROP CONSTRAINT "flds_project_id_fkey";

-- DropForeignKey
ALTER TABLE "infrastructure_developments" DROP CONSTRAINT "infrastructure_developments_project_id_fkey";

-- DropForeignKey
ALTER TABLE "input_distributions" DROP CONSTRAINT "input_distributions_project_id_fkey";

-- DropForeignKey
ALTER TABLE "trainings" DROP CONSTRAINT "trainings_project_id_fkey";

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
