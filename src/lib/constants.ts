import { prisma } from "@lib/prisma";

interface ReportCount {
  id: string;
  count: number;
  updatedAt: Date;
}
export const REPORT_COUNTER_ID = "a26fe90b-6c42-4d45-a594-360ff6ce0092";
export async function incrementReportCounter(): Promise<ReportCount | null> {
  try {
    const updated = await prisma.reportCount.update({
      where: { id: REPORT_COUNTER_ID },
      data: { count: { increment: 1 } }
    });
    return updated; // returns full ReportCount
  } catch (error) {
    console.error("Failed to increment report counter:", error);
    return null;
  }
}
