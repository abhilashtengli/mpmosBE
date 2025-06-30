import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  TextRun,
  AlignmentType,
  WidthType,
  BorderStyle,
  SectionType,
  PageOrientation,
  convertInchesToTwip
} from "docx";

interface Activity {
  title: string;
  units?: string[];
  quarter: number;
  year: number;
  target: number;
  achievement: number;
  targetSentence?: string[];
  achievedSentence?: string[];
  beneficiaries: {
    male: number;
    female: number;
    total: number;
  };
  locations: Array<{
    state: string;
    district: string;
    village: string;
  }>;
  isHeader?: boolean;
  isSubItem?: boolean;
}

interface ReportInfo {
  quarter?: number;
  year?: number;
  reportGeneratedAt?: string;
}

export const generateCompliedDocxReportBuffer = async (
  activities: Activity[],
  reportInfo: ReportInfo = {}
): Promise<Buffer> => {
  const rows: TableRow[] = [];

  // Enhanced header row with larger text and better styling
  rows.push(
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Sr No.", bold: true, size: 28 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 8, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Activity", bold: true, size: 28 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 20, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Units", bold: true, size: 28 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 8, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Target", bold: true, size: 28 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 18, type: WidthType.PERCENTAGE }, // Increased width for sentences
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Achievement", bold: true, size: 28 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 18, type: WidthType.PERCENTAGE }, // Increased width for sentences
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Beneficiaries", bold: true, size: 28 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 14, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Location", bold: true, size: 28 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 150 }
            })
          ],
          width: { size: 14, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.15),
            bottom: convertInchesToTwip(0.15),
            left: convertInchesToTwip(0.12),
            right: convertInchesToTwip(0.12)
          },
          shading: {
            fill: "E8F4FD"
          }
        })
      ]
    })
  );

  // Data rows with enhanced styling and larger text
  let serialNumber = 1;
  activities.forEach((activity, index) => {
    // Check if this is a header row
    if (activity.isHeader) {
      // Header rows like "Input Distribution" - show as main activity with serial number
      const isEvenRow = (serialNumber - 1) % 2 === 0;
      const rowShading = isEvenRow ? "FFFFFF" : "F8F9FA";

      rows.push(
        new TableRow({
          children: [
            // Serial number cell
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${serialNumber}`,
                      size: 24,
                      bold: true
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 120 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            // Activity name cell
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.title,
                      bold: true,
                      size: 24
                    })
                  ],
                  spacing: { after: 120 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.12),
                right: convertInchesToTwip(0.12)
              },
              shading: {
                fill: rowShading
              }
            }),
            // Empty cells for remaining columns (Units, Target, Achievement, Beneficiaries, Location)
            ...Array(5)
              .fill(null)
              .map(
                () =>
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text: "", size: 24 })],
                        spacing: { after: 120 }
                      })
                    ],
                    margins: {
                      top: convertInchesToTwip(0.15),
                      bottom: convertInchesToTwip(0.15),
                      left: convertInchesToTwip(0.08),
                      right: convertInchesToTwip(0.08)
                    },
                    shading: {
                      fill: rowShading
                    },
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0 },
                      bottom: { style: BorderStyle.NONE, size: 0 },
                      left: { style: BorderStyle.NONE, size: 0 },
                      right: { style: BorderStyle.NONE, size: 0 }
                    }
                  })
              )
          ]
        })
      );
      // Increment serial number for header activities
      serialNumber++;
    } else {
      // Regular data row with enhanced styling and alternating row colors
      const isEvenRow = (serialNumber - 1) % 2 === 0;
      const rowShading = isEvenRow ? "FFFFFF" : "F8F9FA";

      // Check if both target and achievement are 0 or null
      const shouldShowNumbers = !(
        (activity.target === 0 || activity.target === null) &&
        (activity.achievement === 0 || activity.achievement === null)
      );

      // Create target content with conditional number and sentences with bullet points
      const targetContent = [];
      // Add target number only if should show numbers
      if (shouldShowNumbers) {
        targetContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Q${activity.quarter}: ${activity.target || 0}`,
                size: 24,
                bold: true,
                color: "2E8B57"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 }
          })
        );
      }
      // Add target sentences with bullet points if they exist
      if (activity.targetSentence && activity.targetSentence.length > 0) {
        activity.targetSentence.forEach((sentence, idx) => {
          targetContent.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `• ${sentence}`,
                  size: 20,
                  color: "2E8B57",
                  italics: true
                })
              ],
              spacing: {
                after: idx === activity.targetSentence!.length - 1 ? 120 : 80
              }
            })
          );
        });
      }

      // Create achievement content with conditional number and sentences with bullet points
      const achievementContent = [];
      // Add achievement number only if should show numbers
      if (shouldShowNumbers) {
        achievementContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Q${activity.quarter}: ${activity.achievement || 0}`,
                size: 24,
                bold: true,
                color: "D2691E"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 }
          })
        );
      }
      // Add achievement sentences with bullet points if they exist
      if (activity.achievedSentence && activity.achievedSentence.length > 0) {
        activity.achievedSentence.forEach((sentence, idx) => {
          achievementContent.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `• ${sentence}`,
                  size: 20,
                  color: "D2691E",
                  italics: true
                })
              ],
              spacing: {
                after: idx === activity.achievedSentence!.length - 1 ? 120 : 80
              }
            })
          );
        });
      }

      // Handle all locations with proper state/district/village labels
      const locationContent = [];

      if (activity.locations && activity.locations.length > 0) {
        activity.locations.forEach((location, idx) => {
          // Add a separator between locations (except for the first one)
          if (idx > 0) {
            locationContent.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: "---",
                    size: 18,
                    color: "CCCCCC"
                  })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 60 }
              })
            );
          }

          locationContent.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `State: ${location.state || "N/A"}`,
                  size: 22
                })
              ],
              spacing: { after: 80 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `District: ${location.district || "N/A"}`,
                  size: 22
                })
              ],
              spacing: { after: 80 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Village: ${location.village || "N/A"}`,
                  size: 22
                })
              ],
              spacing: {
                after: idx === activity.locations.length - 1 ? 80 : 120
              }
            })
          );
        });
      } else {
        // Default when no locations are provided
        locationContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `State: N/A`,
                size: 22
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `District: N/A`,
                size: 22
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Village: N/A`,
                size: 22
              })
            ],
            spacing: { after: 80 }
          })
        );
      }

      // Check if beneficiaries should be shown (only if at least one is not 0)
      const shouldShowBeneficiaries =
        (activity.beneficiaries?.male || 0) > 0 ||
        (activity.beneficiaries?.female || 0) > 0 ||
        (activity.beneficiaries?.total || 0) > 0;

      // Create beneficiaries content conditionally
      const beneficiariesContent = [];
      if (shouldShowBeneficiaries) {
        beneficiariesContent.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Male: ${activity.beneficiaries?.male || 0}`,
                size: 22,
                color: "4682B4"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Female: ${activity.beneficiaries?.female || 0}`,
                size: 22,
                color: "DC143C"
              })
            ],
            spacing: { after: 80 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Total: ${activity.beneficiaries?.total || 0}`,
                size: 24,
                bold: true,
                color: "000000"
              })
            ],
            spacing: { after: 80 }
          })
        );
      } else {
        // Empty content when no beneficiaries
        beneficiariesContent.push(
          new Paragraph({
            children: [new TextRun({ text: "", size: 22 })],
            spacing: { after: 80 }
          })
        );
      }

      rows.push(
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.isSubItem ? "" : `${serialNumber}`,
                      size: 24,
                      bold: true
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 120 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.title || "N/A",
                      italics: activity.isSubItem,
                      size: activity.isSubItem ? 22 : 24,
                      bold: activity.isSubItem ? false : true
                    })
                  ],
                  spacing: { after: 120 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(activity.isSubItem ? 0.2 : 0.12),
                right: convertInchesToTwip(0.12)
              },
              shading: {
                fill: rowShading
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.units ? activity.units.join(", ") : "N/A",
                      size: 24
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 120 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            // Enhanced Target cell with conditional number and sentences with bullet points
            new TableCell({
              children: targetContent,
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            // Enhanced Achievement cell with conditional number and sentences with bullet points
            new TableCell({
              children: achievementContent,
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            // Conditional Beneficiaries cell
            new TableCell({
              children: beneficiariesContent,
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            }),
            new TableCell({
              children: locationContent,
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.08),
                right: convertInchesToTwip(0.08)
              },
              shading: {
                fill: rowShading
              }
            })
          ]
        })
      );

      // Only increment serial number for non-header and non-sub-item rows
      if (!activity.isSubItem) {
        serialNumber++;
      }
    }
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE // Landscape for more width
            },
            margin: {
              top: convertInchesToTwip(0.4),
              right: convertInchesToTwip(0.4),
              bottom: convertInchesToTwip(0.4),
              left: convertInchesToTwip(0.4)
            }
          }
        },
        children: [
          // Top right corner - Report generated by text
          new Paragraph({
            children: [
              new TextRun({
                text: "Report Generated by Millet Project Monitoring System",
                size: 20,
                color: "777777",
                italics: true
              })
            ],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 100 }
          }),

          // Header section with improved layout
          new Paragraph({
            children: [
              new TextRun({
                text: `NEH Quarterly Complied Report`,
                bold: true,
                size: 44,
                color: "1F4E79"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),

          // Project details in a structured format
          new Paragraph({
            children: [
              new TextRun({
                text: `Quarter: ${reportInfo.quarter || "2"}`,
                size: 28,
                bold: true,
                color: "4A4A4A"
              }),
              new TextRun({
                text: " | ",
                size: 28,
                color: "CCCCCC"
              }),
              new TextRun({
                text: `Year: ${reportInfo.year || "2025"}`,
                size: 28,
                bold: true,
                color: "4A4A4A"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `Report Generated: ${
                  reportInfo.reportGeneratedAt ||
                  new Date().toLocaleDateString("en-IN", {
                    timeZone: "Asia/Kolkata"
                  }) +
                    ", " +
                    new Date().toLocaleTimeString("en-IN", {
                      hour12: true,
                      timeZone: "Asia/Kolkata"
                    })
                }`,
                size: 22,
                color: "888888",
                italics: true
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 }
          }),
          new Table({
            rows,
            width: {
              size: 100,
              type: WidthType.PERCENTAGE
            },
            borders: {
              top: { style: BorderStyle.DOUBLE, size: 2, color: "1F4E79" },
              bottom: { style: BorderStyle.DOUBLE, size: 2, color: "1F4E79" },
              left: { style: BorderStyle.SINGLE, size: 2, color: "1F4E79" },
              right: { style: BorderStyle.SINGLE, size: 2, color: "1F4E79" },
              insideHorizontal: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "CCCCCC"
              },
              insideVertical: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "CCCCCC"
              }
            }
          }),

          // Add spacing before signature section
          new Paragraph({
            children: [new TextRun({ text: "", size: 24 })],
            spacing: { after: 600 }
          }),

          // Name and Signature section at bottom right
          new Paragraph({
            children: [
              new TextRun({
                text: "Name: _________________________",
                size: 24,
                bold: true,
                color: "1F4E79"
              })
            ],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 300 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: "Signature: _____________________",
                size: 24,
                bold: true,
                color: "1F4E79"
              })
            ],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 200 }
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};

// Usage example function
export const createReportFromData = async (
  jsonData: any,
  reportInfo?: ReportInfo
) => {
  // Transform the JSON data to match the Activity interface
  const activities: Activity[] = jsonData.data.map((item: any) => ({
    title: item.title,
    units: item.units,
    quarter: item.quarter,
    year: item.year,
    target: item.target,
    achievement: item.achievement,
    targetSentence: item.targetSentence,
    achievedSentence: item.achievedSentence,
    beneficiaries: item.beneficiaries,
    locations: item.locations,
    isHeader: item.isHeader,
    isSubItem: item.isSubItem
  }));

  const mergedProjectInfo = { ...reportInfo };

  return await generateCompliedDocxReportBuffer(activities, mergedProjectInfo);
};
