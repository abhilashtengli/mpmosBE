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
  state?: string;
  year?: number;
  reportGeneratedAt?: string;
  projectDirector?: string;
}

export const generateDocxReportBuffer = async (
  activities: Activity[],
  projectInfo: ProjectInfo = {}
): Promise<Buffer> => {
  console.log("PI : ", projectInfo);
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
          width: { size: 25, type: WidthType.PERCENTAGE },
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
          width: { size: 10, type: WidthType.PERCENTAGE },
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
          width: { size: 12, type: WidthType.PERCENTAGE },
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
          width: { size: 15, type: WidthType.PERCENTAGE },
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
          width: { size: 15, type: WidthType.PERCENTAGE },
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
          width: { size: 15, type: WidthType.PERCENTAGE },
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
                      text: activity.units || "N/A",
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
            new TableCell({
              children: [
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
                      text: `Q${activity.quarter}: ${activity.achievement || 0}`,
                      size: 24,
                      bold: true,
                      color: "D2691E"
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
                      text: `State: ${activity.location.state || "N/A"}`,
                      size: 22
                    })
                  ],
                  spacing: { after: 80 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `District: ${activity.location?.district || "N/A"}`,
                      size: 22
                    })
                  ],
                  spacing: { after: 80 }
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Village: ${activity.location?.village || "N/A"}`,
                      size: 22,
                      bold: true
                    })
                  ],
                  spacing: { after: 80 }
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
                text: `NEH Quarterly Project Report`,
                bold: true,
                size: 44,
                color: "1F4E79"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `${projectInfo.name || "Unknown Project"}`,
                bold: true,
                size: 38,
                color: "2E75B6"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 250 }
          }),

          // Project details in a structured format
          new Paragraph({
            children: [
              new TextRun({
                text: `State: ${projectInfo.state || projectInfo.locationState || "N/A"}`,
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
                text: `Quarter: ${projectInfo.quarter || "N/A"}`,
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
                text: `Year: ${projectInfo.year || "N/A"}`,
                size: 28,
                bold: true,
                color: "4A4A4A"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
          }),

          // Project Director and Report Generation Info
          new Paragraph({
            children: [
              new TextRun({
                text: `Project Director: ${projectInfo.projectDirector || "N/A"}`,
                size: 24,
                bold: true,
                color: "666666"
              })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 150 }
          }),

          new Paragraph({
            children: [
              new TextRun({
                text: `Report Generated: ${projectInfo.reportGeneratedAt || "N/A"}`,
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
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
