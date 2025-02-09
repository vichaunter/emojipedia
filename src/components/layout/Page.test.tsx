import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Page from "./Page";

vi.mock("../UI/Tooltip", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("./Menu", () => ({
  default: () => <div data-testid="menu" />,
}));

describe("Page component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const renderPage = () =>
    render(
      <Page>
        <div data-testid="content" />
      </Page>
    );

  it("renders the page layout with menu and content", () => {
    renderPage();

    expect(screen.getByTestId("menu")).toBeInTheDocument();
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("toggles menu state and updates localStorage", () => {
    renderPage();

    const toggleButton = screen.getByRole("button");
    const sidebar = screen.getByTestId("sidebar");

    expect(sidebar).toHaveClass("w-16");
    fireEvent.click(toggleButton);

    expect(sidebar).toHaveClass("w-64");

    expect(localStorage.getItem("menuOpen")).toBe("true");

    fireEvent.click(toggleButton);

    expect(sidebar).toHaveClass("w-16");
    expect(localStorage.getItem("menuOpen")).toBe("false");
  });

  it("sets initial menu state from localStorage", () => {
    localStorage.setItem("menuOpen", "true");

    renderPage();

    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toHaveClass("w-64");
  });
});
