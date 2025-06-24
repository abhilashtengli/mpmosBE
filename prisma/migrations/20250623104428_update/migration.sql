/*
  Warnings:

  - Added the required column `project_id` to the `ActivitiesCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActivitiesCategory" ADD COLUMN     "project_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ActivitiesCategory" ADD CONSTRAINT "ActivitiesCategory_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
