import truncateToOneDecimal from "../../app/utils/truncateToOneDecimal";

describe("truncateToOneDecimal", () => {
  it("7.812345 becomes 7.8", () => {
    expect(truncateToOneDecimal(7.812345)).toBe("7.8");
  });

  it("5 becomes 5.0", () => {
    expect(truncateToOneDecimal(5)).toBe("5.0");
  });
});
