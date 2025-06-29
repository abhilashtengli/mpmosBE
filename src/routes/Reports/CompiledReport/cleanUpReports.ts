import { deleteContent } from "@services/Cloudflare/cloudflare";
import { prisma } from "@lib/prisma";

const MAX_REPORTS_TO_KEEP = 5;

const safeDeleteFile = async (
  fileKey: string,
  fileName: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const deletionResult = await deleteContent(fileKey);

    if (!deletionResult.success) {
      const errorMsg = `Failed to delete DOCX file ${fileName}`;
      console.warn(errorMsg, deletionResult.error);
      return { success: false, error: errorMsg };
    }

    return { success: true };
  } catch (error) {
    const errorMsg = `Error during DOCX file deletion for ${fileName}`;
    console.error(errorMsg, error);
    return {
      success: false,
      error: `${errorMsg}: ${error instanceof Error ? error.message : "Unknown error"}`
    };
  }
};

export const cleanupOldCompiledReports = async (): Promise<{
  success: boolean;
  warnings: string[];
}> => {
  const warnings: string[] = [];

  try {
    // Fetch all reports ordered by creation date (newest first)
    const allReports = await prisma.compliedReport.findMany({
      select: {
        id: true,
        fileName: true,
        fileKey: true,
        createdAt: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    // If we have MAX_REPORTS_TO_KEEP or fewer, no cleanup needed
    if (allReports.length <= MAX_REPORTS_TO_KEEP) {
    //   console.log(
    //     `No cleanup needed. Report count (${allReports.length}) is within limit (${MAX_REPORTS_TO_KEEP})`
    //   );
      return { success: true, warnings: [] };
    }

    // Get reports to delete (all except the most recent MAX_REPORTS_TO_KEEP)
    const reportsToDelete = allReports.slice(MAX_REPORTS_TO_KEEP);
    // console.log(`Need to delete ${reportsToDelete.length} old reports`);

    // Process each report for deletion
    for (const report of reportsToDelete) {
      try {
        // Delete file from Cloudflare if fileKey exists
        if (report.fileKey) {
          const fileDeleteResult = await safeDeleteFile(
            report.fileKey,
            report.fileName
          );

          if (!fileDeleteResult.success) {
            warnings.push(
              fileDeleteResult.error ||
                `Failed to delete file ${report.fileName}`
            );
          }
        }

        // Delete database record
        await prisma.compliedReport.delete({
          where: { id: report.id }
        });

        // console.log(`Successfully deleted report ${report.fileName}`);
      } catch (error) {
        const errorMsg = `Failed to delete report ${report.fileName}`;
        console.error(errorMsg, error);
        warnings.push(errorMsg);
      }
    }

    // console.log(
    //   `Cleanup completed: ${reportsToDelete.length} reports processed`
    // );
    return { success: warnings.length === 0, warnings };
  } catch (error) {
    const errorMsg = `Critical error during cleanup process`;
    console.error(errorMsg, error);
    warnings.push(
      `Cleanup process failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );

    return { success: false, warnings };
  }
};
