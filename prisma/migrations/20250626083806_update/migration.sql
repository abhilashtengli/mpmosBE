/*
  Warnings:

  - Added the required column `reportType` to the `generated_reports` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('projectreport', 'compiledreport');

-- AlterTable
ALTER TABLE "generated_reports" ADD COLUMN     "reportType" "ReportType" NOT NULL;
