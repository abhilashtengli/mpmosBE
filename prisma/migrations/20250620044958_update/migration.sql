/*
  Warnings:

  - Added the required column `title` to the `infrastructure_developments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "infrastructure_developments" ADD COLUMN     "title" VARCHAR(100) NOT NULL;
