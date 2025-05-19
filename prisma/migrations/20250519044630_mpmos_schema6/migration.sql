/*
  Warnings:

  - You are about to drop the column `userCode` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- DropIndex
DROP INDEX "user_userCode_idx";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "userCode",
ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);
