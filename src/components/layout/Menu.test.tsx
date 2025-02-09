import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useEmojiStore from "../../stores/useEmojiStore";
import Menu from "./Menu";

vi.mock("../../stores/useEmojiStore", () => ({
  default: vi.fn(),
}));

vi.mock("../UI/Tooltip", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Menu component", () => {
  beforeEach(() => {
    vi.mocked(useEmojiStore).mockReturnValue({
      categories: [
        { name: "Smileys", emoji: "😊", slug: "smileys" },
        { name: "Animals", emoji: "🐶", slug: "animals" },
      ],
    });
  });

  const renderMenu = (isOpen: boolean) =>
    render(
      <BrowserRouter>
        <Menu isOpen={isOpen} />
      </BrowserRouter>
    );

  it("renders menu items with tooltip and links", () => {
    renderMenu(false);

    expect(screen.getByText("🔍")).toBeInTheDocument();
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "🔍" })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders menu items with labels when open", () => {
    renderMenu(true);

    expect(screen.getByText("🔍 Home")).toBeInTheDocument();
  });

  it("renders category items from store", () => {
    renderMenu(false);

    expect(screen.getByText("😊")).toBeInTheDocument();
    expect(screen.getByText("🐶")).toBeInTheDocument();
    expect(screen.queryByText("Smileys")).not.toBeInTheDocument();
    expect(screen.queryByText("Animals")).not.toBeInTheDocument();
  });

  it("renders category names when open", () => {
    renderMenu(true);

    expect(screen.getByText("😊 Smileys")).toBeInTheDocument();
    expect(screen.getByText("🐶 Animals")).toBeInTheDocument();
  });
});
