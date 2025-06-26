/*
  Warnings:

  - You are about to drop the `generated_reports` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "generated_reports" DROP CONSTRAINT "generated_reports_projectId_fkey";

-- DropForeignKey
ALTER TABLE "generated_reports" DROP CONSTRAINT "generated_reports_user_id_fkey";

-- DropTable
DROP TABLE "generated_reports";

-- DropEnum
DROP TYPE "ReportType";

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

-- CreateIndex
CREATE INDEX "project_reports_projectId_user_id_idx" ON "project_reports"("projectId", "user_id");

-- CreateIndex
CREATE INDEX "complied_reports_user_id_idx" ON "complied_reports"("user_id");

-- AddForeignKey
ALTER TABLE "project_reports" ADD CONSTRAINT "project_reports_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_reports" ADD CONSTRAINT "project_reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complied_reports" ADD CONSTRAINT "complied_reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
