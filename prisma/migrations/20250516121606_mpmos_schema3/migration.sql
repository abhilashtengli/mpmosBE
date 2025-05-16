/*
  Warnings:

  - You are about to drop the column `beneficiaryFemale` on the `AwarenessProgram` table. All the data in the column will be lost.
  - You are about to drop the column `beneficiaryMale` on the `AwarenessProgram` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `AwarenessProgram` table. All the data in the column will be lost.
  - You are about to drop the column `quarterId` on the `AwarenessProgram` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `AwarenessProgram` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `district` on the `AwarenessProgram` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `village` on the `AwarenessProgram` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `block` on the `AwarenessProgram` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `title` on the `Gallery` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to drop the `CustomInputDistribution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FLD` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InfrastructureDevelopment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InputDistribution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PredefinedInputDistribution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectDetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Publication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Quarter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Training` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UpcomingEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_id` to the `AwarenessProgram` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quarter_id` to the `AwarenessProgram` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'director');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Completed');

-- DropForeignKey
ALTER TABLE "AwarenessProgram" DROP CONSTRAINT "AwarenessProgram_projectId_fkey";

-- DropForeignKey
ALTER TABLE "AwarenessProgram" DROP CONSTRAINT "AwarenessProgram_quarterId_fkey";

-- DropForeignKey
ALTER TABLE "CustomInputDistribution" DROP CONSTRAINT "CustomInputDistribution_inputDistributionId_fkey";

-- DropForeignKey
ALTER TABLE "FLD" DROP CONSTRAINT "FLD_projectId_fkey";

-- DropForeignKey
ALTER TABLE "FLD" DROP CONSTRAINT "FLD_quarterId_fkey";

-- DropForeignKey
ALTER TABLE "InfrastructureDevelopment" DROP CONSTRAINT "InfrastructureDevelopment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "InfrastructureDevelopment" DROP CONSTRAINT "InfrastructureDevelopment_quarterId_fkey";

-- DropForeignKey
ALTER TABLE "InputDistribution" DROP CONSTRAINT "InputDistribution_projectId_fkey";

-- DropForeignKey
ALTER TABLE "InputDistribution" DROP CONSTRAINT "InputDistribution_quarterId_fkey";

-- DropForeignKey
ALTER TABLE "PredefinedInputDistribution" DROP CONSTRAINT "PredefinedInputDistribution_inputDistributionId_fkey";

-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Training" DROP CONSTRAINT "Training_quarterId_fkey";

-- DropIndex
DROP INDEX "AwarenessProgram_projectId_idx";

-- DropIndex
DROP INDEX "AwarenessProgram_quarterId_idx";

-- AlterTable
ALTER TABLE "AwarenessProgram" DROP COLUMN "beneficiaryFemale",
DROP COLUMN "beneficiaryMale",
DROP COLUMN "projectId",
DROP COLUMN "quarterId",
ADD COLUMN     "beneficiary_female" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "beneficiary_male" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "quarter_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "district" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "village" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "block" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "Gallery" ADD COLUMN     "user_id" TEXT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(100);

-- DropTable
DROP TABLE "CustomInputDistribution";

-- DropTable
DROP TABLE "FLD";

-- DropTable
DROP TABLE "InfrastructureDevelopment";

-- DropTable
DROP TABLE "InputDistribution";

-- DropTable
DROP TABLE "PredefinedInputDistribution";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectDetails";

-- DropTable
DROP TABLE "Publication";

-- DropTable
DROP TABLE "Quarter";

-- DropTable
DROP TABLE "Training";

-- DropTable
DROP TABLE "UpcomingEvent";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "userCode" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "verification_code" TEXT,
    "reset_password_token" TEXT,
    "reset_token_expires" TIMESTAMP(3),
    "verificationExpires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "implementingAgency" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "locationState" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "budget" DECIMAL(12,2),
    "status" "Status" NOT NULL DEFAULT 'Active',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quarters" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "quarters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "input_distributions" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "input_distributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "predefined_input_distributions" (
    "id" TEXT NOT NULL,
    "input_distribution_id" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "remarks" VARCHAR(300),
    "units" VARCHAR(20),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "predefined_input_distributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_input_distributions" (
    "id" TEXT NOT NULL,
    "input_distribution_id" TEXT NOT NULL,
    "activityType" VARCHAR(100) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "remarks" VARCHAR(300),
    "units" VARCHAR(20),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "custom_input_distributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "beneficiary_male" INTEGER NOT NULL DEFAULT 0,
    "beneficiary_female" INTEGER NOT NULL DEFAULT 0,
    "remarks" VARCHAR(300),
    "image_url" TEXT,
    "image_key" TEXT,
    "pdf_url" TEXT,
    "pdf_key" TEXT,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flds" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "description" VARCHAR(200),
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "flds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "infrastructure_developments" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "remarks" VARCHAR(300),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "infrastructure_developments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "upcoming_events" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "description" VARCHAR(300),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "upcoming_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    "category" VARCHAR(100),
    "thumbnailUrl" TEXT,
    "thumbnailKey" TEXT,
    "pdfUrl" TEXT,
    "pdfKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_details" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "region" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "budget" DOUBLE PRECISION,
    "center" VARCHAR(100),
    "location" VARCHAR(100),
    "objectives" TEXT[],
    "director" VARCHAR(100) NOT NULL,
    "coDirectors" TEXT[],
    "achievements" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "project_details_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_userCode_idx" ON "user"("userCode");

-- CreateIndex
CREATE INDEX "user_role_idx" ON "user"("role");

-- CreateIndex
CREATE INDEX "projects_title_idx" ON "projects"("title");

-- CreateIndex
CREATE INDEX "projects_implementingAgency_idx" ON "projects"("implementingAgency");

-- CreateIndex
CREATE INDEX "projects_locationState_idx" ON "projects"("locationState");

-- CreateIndex
CREATE INDEX "projects_user_id_idx" ON "projects"("user_id");

-- CreateIndex
CREATE INDEX "projects_status_idx" ON "projects"("status");

-- CreateIndex
CREATE INDEX "projects_createdAt_idx" ON "projects"("createdAt");

-- CreateIndex
CREATE INDEX "quarters_year_idx" ON "quarters"("year");

-- CreateIndex
CREATE INDEX "quarters_isActive_idx" ON "quarters"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "quarters_number_year_key" ON "quarters"("number", "year");

-- CreateIndex
CREATE INDEX "input_distributions_project_id_idx" ON "input_distributions"("project_id");

-- CreateIndex
CREATE INDEX "input_distributions_quarter_id_idx" ON "input_distributions"("quarter_id");

-- CreateIndex
CREATE INDEX "input_distributions_user_id_idx" ON "input_distributions"("user_id");

-- CreateIndex
CREATE INDEX "input_distributions_createdAt_idx" ON "input_distributions"("createdAt");

-- CreateIndex
CREATE INDEX "predefined_input_distributions_input_distribution_id_idx" ON "predefined_input_distributions"("input_distribution_id");

-- CreateIndex
CREATE INDEX "predefined_input_distributions_activityType_idx" ON "predefined_input_distributions"("activityType");

-- CreateIndex
CREATE INDEX "predefined_input_distributions_district_village_block_idx" ON "predefined_input_distributions"("district", "village", "block");

-- CreateIndex
CREATE INDEX "custom_input_distributions_input_distribution_id_idx" ON "custom_input_distributions"("input_distribution_id");

-- CreateIndex
CREATE INDEX "custom_input_distributions_activityType_idx" ON "custom_input_distributions"("activityType");

-- CreateIndex
CREATE INDEX "custom_input_distributions_district_village_block_idx" ON "custom_input_distributions"("district", "village", "block");

-- CreateIndex
CREATE INDEX "trainings_project_id_idx" ON "trainings"("project_id");

-- CreateIndex
CREATE INDEX "trainings_quarter_id_idx" ON "trainings"("quarter_id");

-- CreateIndex
CREATE INDEX "trainings_user_id_idx" ON "trainings"("user_id");

-- CreateIndex
CREATE INDEX "trainings_title_idx" ON "trainings"("title");

-- CreateIndex
CREATE INDEX "trainings_district_village_block_idx" ON "trainings"("district", "village", "block");

-- CreateIndex
CREATE INDEX "trainings_createdAt_idx" ON "trainings"("createdAt");

-- CreateIndex
CREATE INDEX "flds_project_id_idx" ON "flds"("project_id");

-- CreateIndex
CREATE INDEX "flds_quarter_id_idx" ON "flds"("quarter_id");

-- CreateIndex
CREATE INDEX "flds_user_id_idx" ON "flds"("user_id");

-- CreateIndex
CREATE INDEX "infrastructure_developments_project_id_idx" ON "infrastructure_developments"("project_id");

-- CreateIndex
CREATE INDEX "infrastructure_developments_quarter_id_idx" ON "infrastructure_developments"("quarter_id");

-- CreateIndex
CREATE INDEX "infrastructure_developments_user_id_idx" ON "infrastructure_developments"("user_id");

-- CreateIndex
CREATE INDEX "infrastructure_developments_district_village_block_idx" ON "infrastructure_developments"("district", "village", "block");

-- CreateIndex
CREATE INDEX "infrastructure_developments_createdAt_idx" ON "infrastructure_developments"("createdAt");

-- CreateIndex
CREATE INDEX "upcoming_events_date_idx" ON "upcoming_events"("date");

-- CreateIndex
CREATE INDEX "upcoming_events_location_idx" ON "upcoming_events"("location");

-- CreateIndex
CREATE INDEX "upcoming_events_user_id_idx" ON "upcoming_events"("user_id");

-- CreateIndex
CREATE INDEX "publications_title_idx" ON "publications"("title");

-- CreateIndex
CREATE INDEX "publications_type_idx" ON "publications"("type");

-- CreateIndex
CREATE INDEX "publications_category_idx" ON "publications"("category");

-- CreateIndex
CREATE INDEX "publications_user_id_idx" ON "publications"("user_id");

-- CreateIndex
CREATE INDEX "project_details_title_idx" ON "project_details"("title");

-- CreateIndex
CREATE INDEX "project_details_region_idx" ON "project_details"("region");

-- CreateIndex
CREATE INDEX "project_details_year_idx" ON "project_details"("year");

-- CreateIndex
CREATE INDEX "project_details_center_idx" ON "project_details"("center");

-- CreateIndex
CREATE INDEX "project_details_location_idx" ON "project_details"("location");

-- CreateIndex
CREATE INDEX "project_details_director_idx" ON "project_details"("director");

-- CreateIndex
CREATE INDEX "project_details_user_id_idx" ON "project_details"("user_id");

-- CreateIndex
CREATE INDEX "AwarenessProgram_project_id_idx" ON "AwarenessProgram"("project_id");

-- CreateIndex
CREATE INDEX "AwarenessProgram_quarter_id_idx" ON "AwarenessProgram"("quarter_id");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "predefined_input_distributions" ADD CONSTRAINT "predefined_input_distributions_input_distribution_id_fkey" FOREIGN KEY ("input_distribution_id") REFERENCES "input_distributions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "custom_input_distributions" ADD CONSTRAINT "custom_input_distributions_input_distribution_id_fkey" FOREIGN KEY ("input_distribution_id") REFERENCES "input_distributions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "upcoming_events" ADD CONSTRAINT "upcoming_events_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "publications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
