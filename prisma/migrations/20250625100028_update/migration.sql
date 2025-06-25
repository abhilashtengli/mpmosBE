-- AlterTable
ALTER TABLE "AwarenessProgram" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "target" DROP NOT NULL,
ALTER COLUMN "achieved" DROP NOT NULL;

-- AlterTable
ALTER TABLE "activities" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "target" DROP NOT NULL,
ALTER COLUMN "achieved" DROP NOT NULL;

-- AlterTable
ALTER TABLE "flds" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "target" DROP NOT NULL,
ALTER COLUMN "achieved" DROP NOT NULL;

-- AlterTable
ALTER TABLE "infrastructure_developments" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "target" DROP NOT NULL,
ALTER COLUMN "achieved" DROP NOT NULL;

-- AlterTable
ALTER TABLE "input_distributions" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "achieved" DROP NOT NULL,
ALTER COLUMN "target" DROP NOT NULL;

-- AlterTable
ALTER TABLE "trainings" ADD COLUMN     "achievedSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "targetSentence" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "target" DROP NOT NULL,
ALTER COLUMN "achieved" DROP NOT NULL;
