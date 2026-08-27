export default function truncateToOneDecimal(value: number): string {
  return (Math.trunc(value * 10) / 10).toFixed(1);
}
