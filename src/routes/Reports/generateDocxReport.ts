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
  units?: string;
  quarter: number;
  year: number;
  target: number;
  achievement: number;
  beneficiaries: {
    male: number;
    female: number;
    total: number;
  };
  location: {
    state: string;
    district: string;
    village: string;
  };
  isHeader?: boolean;
  isSubItem?: boolean;
}

interface ProjectInfo {
  name?: string;
  quarter?: number;
  locationState?: string;
  year?: number;
}

export const generateDocxReportBuffer = async (
  activities: Activity[],
  projectInfo: ProjectInfo = {}
): Promise<Buffer> => {
  console.log("PI : ", projectInfo);
  const rows: TableRow[] = [];

  // Header row with better styling and fixed widths
  rows.push(
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Sr No.", bold: true, size: 20 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 8, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Activity", bold: true, size: 20 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 25, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Units", bold: true, size: 20 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 10, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: "Target", bold: true, size: 20 })],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 12, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Achievement", bold: true, size: 20 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 15, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Beneficiaries", bold: true, size: 20 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 15, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        }),
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "Location", bold: true, size: 20 })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 100 }
            })
          ],
          width: { size: 15, type: WidthType.PERCENTAGE },
          margins: {
            top: convertInchesToTwip(0.1),
            bottom: convertInchesToTwip(0.1),
            left: convertInchesToTwip(0.1),
            right: convertInchesToTwip(0.1)
          }
        })
      ]
    })
  );

  // Data rows with better spacing
  let serialNumber = 1;
  activities.forEach((activity) => {
    // Check if this is a header row
    if (activity.isHeader) {
      rows.push(
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph("")],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.title,
                      bold: true,
                      size: 22,
                      color: "2E75B6"
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 200, after: 200 }
                })
              ],
              columnSpan: 6,
              margins: {
                top: convertInchesToTwip(0.15),
                bottom: convertInchesToTwip(0.15),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1)
              }
            })
          ]
        })
      );
    } else {
      // Regular data row with better spacing
      rows.push(
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.isSubItem ? "" : `${serialNumber}`,
                      size: 18
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 100 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.title || "N/A",
                      italics: activity.isSubItem,
                      size: 18
                    })
                  ],
                  spacing: { after: 100 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.1),
                right: convertInchesToTwip(0.1)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: activity.units || "N/A",
                      size: 18
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 100 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Q${activity.quarter}: ${activity.target || 0}`,
                      size: 18
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 100 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Q${activity.quarter}: ${activity.achievement || 0}`,
                      size: 18
                    })
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { after: 100 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Male: ${activity.beneficiaries?.male || 0}`,
                      size: 16
                    })
                  ],
                  spacing: { after: 50 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Female: ${activity.beneficiaries?.female || 0}`,
                      size: 16
                    })
                  ],
                  spacing: { after: 50 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Total: ${activity.beneficiaries?.total || 0}`,
                      size: 16,
                      bold: true
                    })
                  ],
                  spacing: { after: 50 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
              }
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `State: ${activity.location.state || "N/A"}`,
                      size: 16
                    })
                  ],
                  spacing: { after: 50 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `District: ${activity.location?.district || "N/A"}`,
                      size: 16
                    })
                  ],
                  spacing: { after: 50 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Village: ${activity.location?.village || "N/A"}`,
                      size: 16
                    })
                  ],
                  spacing: { after: 50 }
                })
              ],
              margins: {
                top: convertInchesToTwip(0.1),
                bottom: convertInchesToTwip(0.1),
                left: convertInchesToTwip(0.05),
                right: convertInchesToTwip(0.05)
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
              top: convertInchesToTwip(0.5),
              right: convertInchesToTwip(0.5),
              bottom: convertInchesToTwip(0.5),
              left: convertInchesToTwip(0.5)
            }
          }
        },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Project Report - ${projectInfo.name || "Unknown Project"}`,
                bold: true,
                size: 32
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 }
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Quarter: ${projectInfo.quarter}, Year: ${projectInfo.year}`,
                size: 24
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
              top: { style: BorderStyle.SINGLE, size: 1 },
              bottom: { style: BorderStyle.SINGLE, size: 1 },
              left: { style: BorderStyle.SINGLE, size: 1 },
              right: { style: BorderStyle.SINGLE, size: 1 },
              insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
              insideVertical: { style: BorderStyle.SINGLE, size: 1 }
            }
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
