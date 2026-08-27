import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "../../app/components/header/Menu";

describe("Menu", () => {
  it("starts closed", () => {
    render(<Menu />);

    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("opens when the hamburger is clicked", () => {
    render(<Menu />);

    fireEvent.click(screen.getByRole("button", { name: "Menu" }));

    expect(screen.getByRole("button", { name: "Menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
