/*
  Warnings:

  - You are about to drop the `custom_input_distributions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `predefined_input_distributions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `achieved` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activityType` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `block` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `input_distributions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `village` to the `input_distributions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "custom_input_distributions" DROP CONSTRAINT "custom_input_distributions_input_distribution_id_fkey";

-- DropForeignKey
ALTER TABLE "predefined_input_distributions" DROP CONSTRAINT "predefined_input_distributions_input_distribution_id_fkey";

-- AlterTable
ALTER TABLE "input_distributions" ADD COLUMN     "achieved" INTEGER NOT NULL,
ADD COLUMN     "activityType" VARCHAR(100) NOT NULL,
ADD COLUMN     "block" VARCHAR(100) NOT NULL,
ADD COLUMN     "district" VARCHAR(100) NOT NULL,
ADD COLUMN     "imageKey" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "name" VARCHAR(200) NOT NULL,
ADD COLUMN     "remarks" VARCHAR(300),
ADD COLUMN     "target" INTEGER NOT NULL,
ADD COLUMN     "units" VARCHAR(20),
ADD COLUMN     "village" VARCHAR(100) NOT NULL;

-- DropTable
DROP TABLE "custom_input_distributions";

-- DropTable
DROP TABLE "predefined_input_distributions";

-- CreateIndex
CREATE INDEX "input_distributions_activityType_idx" ON "input_distributions"("activityType");

-- CreateIndex
CREATE INDEX "input_distributions_district_village_block_idx" ON "input_distributions"("district", "village", "block");
