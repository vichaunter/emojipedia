import { render, screen, within } from "@testing-library/react";
import { EmojiData } from "../../lib/emojis";
import EmojiListGrid from "./EmojiListGrid";

describe("EmojiListGrid", () => {
  const mockEmojis: EmojiData[] = [
    { code: "U+1F600", emoji: "😀", name: "Grinning Face" },
    { code: "U+1F602", emoji: "😂", name: "Face with Tears of Joy" },
    { code: "U+1F60D", emoji: "😍", name: "Smiling Face with Heart-Eyes" },
    { code: "U+1F44D", emoji: "👍", name: "Thumbs Up" },
    { code: "U+1F44E", emoji: "👎", name: "Thumbs Down" },
  ] as EmojiData[];

  it("renders the EmojiListGrid component with emojis", () => {
    render(<EmojiListGrid items={mockEmojis} />);

    const emojiItems = screen.getAllByTestId("emoji-grid-item");
    expect(emojiItems.length).toBe(mockEmojis.length);

    mockEmojis.forEach((emoji, index) => {
      const emojiItem = emojiItems[index];
      expect(within(emojiItem).getByText(emoji.emoji)).toBeInTheDocument();
      expect(within(emojiItem).getByText(emoji.name)).toBeInTheDocument();
      expect(within(emojiItem).getByText(/Copy/)).toBeInTheDocument();
    });
  });

  it("handles empty emoji list", () => {
    render(<EmojiListGrid items={[]} />);

    const emojiItems = screen.queryAllByRole("gridcell");
    expect(emojiItems.length).toBe(0);
  });
});
