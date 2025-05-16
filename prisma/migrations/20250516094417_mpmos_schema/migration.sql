-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "implementingAgency" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "locationState" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quarter" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,

    CONSTRAINT "Quarter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputDistribution" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InputDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PredefinedInputDistribution" (
    "id" TEXT NOT NULL,
    "inputDistributionId" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "remarks" VARCHAR(300),
    "units" TEXT,
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PredefinedInputDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomInputDistribution" (
    "id" TEXT NOT NULL,
    "inputDistributionId" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "remarks" VARCHAR(300),
    "units" TEXT,
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomInputDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarterId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "beneficiaryMale" INTEGER NOT NULL DEFAULT 0,
    "beneficiaryFemale" INTEGER NOT NULL DEFAULT 0,
    "remarks" VARCHAR(300),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "pdfUrl" TEXT,
    "pdfKey" TEXT,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FLD" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarterId" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FLD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AwarenessProgram" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarterId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "beneficiaryMale" INTEGER NOT NULL DEFAULT 0,
    "beneficiaryFemale" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "units" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AwarenessProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfrastructureDevelopment" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "quarterId" TEXT NOT NULL,
    "target" INTEGER NOT NULL,
    "achieved" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "remarks" VARCHAR(300),
    "imageUrl" TEXT,
    "imageKey" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InfrastructureDevelopment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UpcomingEvent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UpcomingEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT,
    "thumbnailUrl" TEXT,
    "thumbnailKey" TEXT,
    "pdfUrl" TEXT,
    "pdfKey" TEXT,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageKey" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectDetails" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "budget" DOUBLE PRECISION,
    "center" TEXT,
    "location" TEXT,
    "objectives" TEXT[],
    "director" TEXT NOT NULL,
    "coDirectors" TEXT[],
    "achievements" TEXT[],

    CONSTRAINT "ProjectDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_title_idx" ON "Project"("title");

-- CreateIndex
CREATE INDEX "Project_implementingAgency_idx" ON "Project"("implementingAgency");

-- CreateIndex
CREATE INDEX "Project_locationState_idx" ON "Project"("locationState");

-- CreateIndex
CREATE INDEX "Project_createdAt_idx" ON "Project"("createdAt");

-- CreateIndex
CREATE INDEX "Quarter_year_idx" ON "Quarter"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Quarter_number_year_key" ON "Quarter"("number", "year");

-- CreateIndex
CREATE INDEX "InputDistribution_projectId_idx" ON "InputDistribution"("projectId");

-- CreateIndex
CREATE INDEX "InputDistribution_quarterId_idx" ON "InputDistribution"("quarterId");

-- CreateIndex
CREATE INDEX "InputDistribution_createdAt_idx" ON "InputDistribution"("createdAt");

-- CreateIndex
CREATE INDEX "PredefinedInputDistribution_inputDistributionId_idx" ON "PredefinedInputDistribution"("inputDistributionId");

-- CreateIndex
CREATE INDEX "PredefinedInputDistribution_activityType_idx" ON "PredefinedInputDistribution"("activityType");

-- CreateIndex
CREATE INDEX "PredefinedInputDistribution_district_village_block_idx" ON "PredefinedInputDistribution"("district", "village", "block");

-- CreateIndex
CREATE INDEX "CustomInputDistribution_inputDistributionId_idx" ON "CustomInputDistribution"("inputDistributionId");

-- CreateIndex
CREATE INDEX "CustomInputDistribution_activityType_idx" ON "CustomInputDistribution"("activityType");

-- CreateIndex
CREATE INDEX "CustomInputDistribution_district_village_block_idx" ON "CustomInputDistribution"("district", "village", "block");

-- CreateIndex
CREATE INDEX "Training_projectId_idx" ON "Training"("projectId");

-- CreateIndex
CREATE INDEX "Training_quarterId_idx" ON "Training"("quarterId");

-- CreateIndex
CREATE INDEX "Training_title_idx" ON "Training"("title");

-- CreateIndex
CREATE INDEX "Training_district_village_block_idx" ON "Training"("district", "village", "block");

-- CreateIndex
CREATE INDEX "Training_createdAt_idx" ON "Training"("createdAt");

-- CreateIndex
CREATE INDEX "FLD_projectId_idx" ON "FLD"("projectId");

-- CreateIndex
CREATE INDEX "FLD_quarterId_idx" ON "FLD"("quarterId");

-- CreateIndex
CREATE INDEX "AwarenessProgram_projectId_idx" ON "AwarenessProgram"("projectId");

-- CreateIndex
CREATE INDEX "AwarenessProgram_quarterId_idx" ON "AwarenessProgram"("quarterId");

-- CreateIndex
CREATE INDEX "AwarenessProgram_title_idx" ON "AwarenessProgram"("title");

-- CreateIndex
CREATE INDEX "AwarenessProgram_district_village_block_idx" ON "AwarenessProgram"("district", "village", "block");

-- CreateIndex
CREATE INDEX "AwarenessProgram_createdAt_idx" ON "AwarenessProgram"("createdAt");

-- CreateIndex
CREATE INDEX "InfrastructureDevelopment_projectId_idx" ON "InfrastructureDevelopment"("projectId");

-- CreateIndex
CREATE INDEX "InfrastructureDevelopment_quarterId_idx" ON "InfrastructureDevelopment"("quarterId");

-- CreateIndex
CREATE INDEX "InfrastructureDevelopment_district_village_block_idx" ON "InfrastructureDevelopment"("district", "village", "block");

-- CreateIndex
CREATE INDEX "InfrastructureDevelopment_createdAt_idx" ON "InfrastructureDevelopment"("createdAt");

-- CreateIndex
CREATE INDEX "UpcomingEvent_date_idx" ON "UpcomingEvent"("date");

-- CreateIndex
CREATE INDEX "UpcomingEvent_location_idx" ON "UpcomingEvent"("location");

-- CreateIndex
CREATE INDEX "Publication_title_idx" ON "Publication"("title");

-- CreateIndex
CREATE INDEX "Publication_type_idx" ON "Publication"("type");

-- CreateIndex
CREATE INDEX "Publication_category_idx" ON "Publication"("category");

-- CreateIndex
CREATE INDEX "Gallery_title_idx" ON "Gallery"("title");

-- CreateIndex
CREATE INDEX "ProjectDetails_title_idx" ON "ProjectDetails"("title");

-- CreateIndex
CREATE INDEX "ProjectDetails_region_idx" ON "ProjectDetails"("region");

-- CreateIndex
CREATE INDEX "ProjectDetails_year_idx" ON "ProjectDetails"("year");

-- CreateIndex
CREATE INDEX "ProjectDetails_center_idx" ON "ProjectDetails"("center");

-- CreateIndex
CREATE INDEX "ProjectDetails_location_idx" ON "ProjectDetails"("location");

-- CreateIndex
CREATE INDEX "ProjectDetails_director_idx" ON "ProjectDetails"("director");

-- AddForeignKey
ALTER TABLE "InputDistribution" ADD CONSTRAINT "InputDistribution_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InputDistribution" ADD CONSTRAINT "InputDistribution_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "Quarter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PredefinedInputDistribution" ADD CONSTRAINT "PredefinedInputDistribution_inputDistributionId_fkey" FOREIGN KEY ("inputDistributionId") REFERENCES "InputDistribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomInputDistribution" ADD CONSTRAINT "CustomInputDistribution_inputDistributionId_fkey" FOREIGN KEY ("inputDistributionId") REFERENCES "InputDistribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "Quarter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FLD" ADD CONSTRAINT "FLD_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FLD" ADD CONSTRAINT "FLD_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "Quarter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AwarenessProgram" ADD CONSTRAINT "AwarenessProgram_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "Quarter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfrastructureDevelopment" ADD CONSTRAINT "InfrastructureDevelopment_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfrastructureDevelopment" ADD CONSTRAINT "InfrastructureDevelopment_quarterId_fkey" FOREIGN KEY ("quarterId") REFERENCES "Quarter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
