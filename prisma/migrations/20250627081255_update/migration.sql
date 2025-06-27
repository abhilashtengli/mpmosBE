-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'director');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Completed');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "verification_code" TEXT,
    "reset_password_token" TEXT,
    "reset_token_expires" TIMESTAMP(3),
    "verificationExpires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verificationAttempts" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
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
    "inputDistId" TEXT NOT NULL,
    "achieved" INTEGER,
    "activityType" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "imageKey" TEXT,
    "imageUrl" TEXT,
    "name" VARCHAR(200) NOT NULL,
    "remarks" VARCHAR(300),
    "target" INTEGER,
    "units" VARCHAR(20),
    "village" VARCHAR(100) NOT NULL,
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "input_distributions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trainings" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "target" INTEGER,
    "achieved" INTEGER,
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
    "trainingId" TEXT NOT NULL,
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flds" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "target" INTEGER,
    "achieved" INTEGER,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "fldId" TEXT NOT NULL,
    "remarks" VARCHAR(300),
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "flds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwarenessProgram" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "target" INTEGER,
    "achieved" INTEGER,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "beneficiary_female" INTEGER NOT NULL DEFAULT 0,
    "beneficiary_male" INTEGER NOT NULL DEFAULT 0,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "user_id" TEXT,
    "awarnessprogramId" TEXT NOT NULL,
    "remarks" VARCHAR(300),
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "AwarenessProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "infrastructure_developments" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "target" INTEGER,
    "achieved" INTEGER,
    "district" VARCHAR(100) NOT NULL,
    "village" VARCHAR(100) NOT NULL,
    "block" VARCHAR(100) NOT NULL,
    "remarks" VARCHAR(300),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,
    "InfraDevId" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

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
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_details" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(300) NOT NULL,
    "region" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "budget" DOUBLE PRECISION,
    "center" VARCHAR(300),
    "location" VARCHAR(200),
    "objectives" TEXT[],
    "director" VARCHAR(100) NOT NULL,
    "coDirectors" TEXT[],
    "achievements" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "project_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivitiesCategory" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "ActivitiesCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "activityCategoryId" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "quarter_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "target" INTEGER,
    "achieved" INTEGER,
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
    "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_reports" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarter" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complied_reports" (
    "id" TEXT NOT NULL,
    "quarter" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "user_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complied_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_count" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "report_count_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

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
CREATE UNIQUE INDEX "quarters_number_year_key" ON "quarters"("number", "year");

-- CreateIndex
CREATE UNIQUE INDEX "input_distributions_inputDistId_key" ON "input_distributions"("inputDistId");

-- CreateIndex
CREATE INDEX "input_distributions_project_id_idx" ON "input_distributions"("project_id");

-- CreateIndex
CREATE INDEX "input_distributions_quarter_id_idx" ON "input_distributions"("quarter_id");

-- CreateIndex
CREATE INDEX "input_distributions_user_id_idx" ON "input_distributions"("user_id");

-- CreateIndex
CREATE INDEX "input_distributions_activityType_idx" ON "input_distributions"("activityType");

-- CreateIndex
CREATE INDEX "input_distributions_district_village_block_idx" ON "input_distributions"("district", "village", "block");

-- CreateIndex
CREATE INDEX "input_distributions_createdAt_idx" ON "input_distributions"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "trainings_trainingId_key" ON "trainings"("trainingId");

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
CREATE UNIQUE INDEX "flds_fldId_key" ON "flds"("fldId");

-- CreateIndex
CREATE INDEX "flds_project_id_idx" ON "flds"("project_id");

-- CreateIndex
CREATE INDEX "flds_quarter_id_idx" ON "flds"("quarter_id");

-- CreateIndex
CREATE INDEX "flds_user_id_idx" ON "flds"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "AwarenessProgram_awarnessprogramId_key" ON "AwarenessProgram"("awarnessprogramId");

-- CreateIndex
CREATE INDEX "AwarenessProgram_project_id_idx" ON "AwarenessProgram"("project_id");

-- CreateIndex
CREATE INDEX "AwarenessProgram_quarter_id_idx" ON "AwarenessProgram"("quarter_id");

-- CreateIndex
CREATE INDEX "AwarenessProgram_title_idx" ON "AwarenessProgram"("title");

-- CreateIndex
CREATE INDEX "AwarenessProgram_district_village_block_idx" ON "AwarenessProgram"("district", "village", "block");

-- CreateIndex
CREATE INDEX "AwarenessProgram_createdAt_idx" ON "AwarenessProgram"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "infrastructure_developments_InfraDevId_key" ON "infrastructure_developments"("InfraDevId");

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
CREATE INDEX "Gallery_title_idx" ON "Gallery"("title");

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
CREATE UNIQUE INDEX "activities_activityId_key" ON "activities"("activityId");

-- CreateIndex
CREATE INDEX "activities_project_id_idx" ON "activities"("project_id");

-- CreateIndex
CREATE INDEX "activities_quarter_id_idx" ON "activities"("quarter_id");

-- CreateIndex
CREATE INDEX "activities_user_id_idx" ON "activities"("user_id");

-- CreateIndex
CREATE INDEX "activities_title_idx" ON "activities"("title");

-- CreateIndex
CREATE INDEX "activities_district_village_block_idx" ON "activities"("district", "village", "block");

-- CreateIndex
CREATE INDEX "activities_createdAt_idx" ON "activities"("createdAt");

-- CreateIndex
CREATE INDEX "project_reports_projectId_user_id_idx" ON "project_reports"("projectId", "user_id");

-- CreateIndex
CREATE INDEX "complied_reports_user_id_idx" ON "complied_reports"("user_id");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input_distributions" ADD CONSTRAINT "input_distributions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flds" ADD CONSTRAINT "flds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "infrastructure_developments" ADD CONSTRAINT "infrastructure_developments_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "ActivitiesCategory" ADD CONSTRAINT "ActivitiesCategory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_activityCategoryId_fkey" FOREIGN KEY ("activityCategoryId") REFERENCES "ActivitiesCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_quarter_id_fkey" FOREIGN KEY ("quarter_id") REFERENCES "quarters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_reports" ADD CONSTRAINT "project_reports_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_reports" ADD CONSTRAINT "project_reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complied_reports" ADD CONSTRAINT "complied_reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
