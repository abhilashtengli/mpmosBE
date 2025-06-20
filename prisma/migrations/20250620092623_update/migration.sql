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

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "activities_activityId_key" ON "activities"("activityId");

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
