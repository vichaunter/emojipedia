import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { EmojiData } from "../../lib/emojis";
import EmojiListRows from "./EmojiListRows";

vi.mock("../UI/CopyButton", () => {
  return {
    default: ({ text }: { text: string }) => (
      <button data-testid="copy-button">{text}</button>
    ),
  };
});

describe("EmojiListRows Component", () => {
  const mockEmojis: EmojiData[] = [
    {
      emoji: "😀",
      name: "Grinning Face",
      category: "Smileys & Emotion",
      code: "1F600",
      description: "A smiling face",
    },
    {
      emoji: "👍",
      name: "Thumbs Up",
      category: "People & Body",
      code: "1F44D",
      description: "A thumbs-up gesture",
    },
    {
      emoji: "❤️",
      name: "Red Heart",
      category: "Symbols",
      code: "2764",
      description: "A red heart symbol",
    },
  ] as EmojiData[];

  it("renders the emoji list correctly", () => {
    render(<EmojiListRows items={mockEmojis} />);

    const emojiElements = screen.getAllByTestId("emoji");
    expect(emojiElements.length).toBe(mockEmojis.length);
    emojiElements.forEach((emojiElement, index) => {
      expect(emojiElement).toHaveTextContent(mockEmojis[index].emoji);
    });

    expect(screen.getByText("Grinning Face")).toBeInTheDocument();
    expect(screen.getByText("Smileys & Emotion")).toBeInTheDocument();
    expect(screen.getByText("1F600")).toBeInTheDocument();
    expect(screen.getByText("A smiling face")).toBeInTheDocument();

    expect(screen.getAllByTestId("copy-button").length).toBe(3);
  });

  it("renders correctly with an empty items array", () => {
    render(<EmojiListRows items={[]} />);
    expect(screen.queryByText("Name:")).not.toBeInTheDocument();
  });

  it("handles long descriptions correctly", () => {
    const longDescriptionEmoji = {
      ...mockEmojis[0],
      description:
        "This is a very long description that should wrap to multiple lines to ensure correct rendering.",
    };
    render(<EmojiListRows items={[longDescriptionEmoji]} />);
    const descriptionElement = screen.getByText(
      "This is a very long description that should wrap to multiple lines to ensure correct rendering."
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it("handles special characters in name and description", () => {
    const specialCharsEmoji = {
      emoji: "😎",
      name: "Cool 😎 Emoji",
      category: "Smileys & Emotion",
      code: "1F60E",
      description:
        "This is a description with !@#$%^&*()_+ special characters.",
    } as EmojiData;
    render(<EmojiListRows items={[specialCharsEmoji]} />);
    expect(screen.getByText("Cool 😎 Emoji")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This is a description with !@#$%^&*()_+ special characters."
      )
    ).toBeInTheDocument();
  });
});
