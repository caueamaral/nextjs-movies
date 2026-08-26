export default function truncateToOneDecimal(value: number): number {
  return Math.trunc(value * 10) / 10;
}
