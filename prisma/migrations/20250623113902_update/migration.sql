/*
  Warnings:

  - You are about to drop the column `project_id` on the `ActivitiesCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActivitiesCategory" DROP CONSTRAINT "ActivitiesCategory_project_id_fkey";

-- AlterTable
ALTER TABLE "ActivitiesCategory" DROP COLUMN "project_id";
