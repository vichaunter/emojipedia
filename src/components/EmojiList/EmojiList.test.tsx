import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import type { EmojiData } from "../../lib/emojis";
import EmojiList from "./EmojiList";

const emojis = [
  {
    name: "smile",
    emoji: "😀",
    code: "U+1F600",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["happy", "joy"],
  },
  {
    name: "grinning face",
    emoji: "😁",
    code: "U+1F601",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["happy", "smile"],
  },
] as EmojiData[];

let currentViewMode: "grid" | "rows" = "grid";

vi.mock("../../stores/useViewModeStore", () => {
  return {
    default: () => ({ mode: currentViewMode }),
  };
});

vi.mock("./EmojiListGrid", () => {
  return {
    default: (props: { items: EmojiData[] }) => (
      <div data-testid="emoji-list-grid">
        Grid view with {props.items.length} items
      </div>
    ),
  };
});

vi.mock("./EmojiListRows", () => {
  return {
    default: (props: { items: EmojiData[] }) => (
      <div data-testid="emoji-list-rows">
        Row view with {props.items.length} items
      </div>
    ),
  };
});

describe("EmojiList component", () => {
  beforeEach(() => {
    currentViewMode = "grid";
  });

  it('should render grid view when view mode is "grid"', () => {
    currentViewMode = "grid";

    render(<EmojiList items={emojis} />);

    expect(screen.getByTestId("emoji-list-grid")).toHaveTextContent("2 items");
    expect(screen.queryByTestId("emoji-list-rows")).toBeNull();
  });

  it('should render row view when view mode is "rows"', () => {
    currentViewMode = "rows";

    render(<EmojiList items={emojis} />);

    expect(screen.getByTestId("emoji-list-rows")).toHaveTextContent("2 items");
    expect(screen.queryByTestId("emoji-list-grid")).toBeNull();
  });

  it('should render "No results found." when items is empty', () => {
    currentViewMode = "grid";
    render(<EmojiList items={[]} />);

    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
});
