
export function generateFormattedId(
  prefix: string,
  number: number,
  length = 3
): string {
  return `${prefix}${number.toString().padStart(length, "0")}`;
}
