import { render, screen } from "@testing-library/react";
import Header from "../app/components/header/Header";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
