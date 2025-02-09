import { describe, expect, it, vi } from "vitest";
import { EmojiData } from "../lib/emojis";
import getSearchMatchScore from "./getSearchMatchScore";
import { searchEmojis } from "./searchEmojis";

vi.mock("./getSearchMatchScore");

const emojisData: Record<string, EmojiData> = {
  "😀": {
    code: "U+1F600",
    emoji: "😀",
    number: 1,
    name: "grinning face",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["smile", "happy", "joy", "cheerful", "grin", "excitement"],
    description:
      "A classic yellow grinning face with wide-open eyes and a broad smile, symbolizing extreme happiness, positivity, or lightheartedness. Often used to express joy, laughter, or friendliness in casual conversations.",
  },
  "😷": {
    code: "U+1F637",
    emoji: "😷",
    number: 47,
    name: "face with medical mask",
    category: "Smileys & Emotion",
    subCategory: "face-unwell",
    tags: ["sick", "health", "cold", "flu", "protection", "safety"],
    description:
      "A face wearing a medical mask, symbolizing illness, protection from germs, or healthcare settings. Widely used during pandemics or to indicate caution.",
  },
  ":)": {
    code: "face",
    emoji: ":)",
    number: 47,
    name: "face with medical mask",
    category: "Smileys & Emotion",
    subCategory: "face-unwell",
    tags: ["sick", "health", "cold", "flu", "protection"],
    description:
      "A face wearing a medical mask, symbolizing illness, protection from germs, or healthcare settings. Widely used during pandemics or to indicate caution.",
  },
};

const searchToArr = (
  query: string,
  emojis: Record<string, EmojiData> = emojisData
) => searchEmojis(query, emojis).map((emoji) => emoji.emoji);

describe("searchEmojis", () => {
  it("returns an empty array when no emojis match the query", () => {
    vi.mocked(getSearchMatchScore).mockImplementation(() => 0);

    const result = searchToArr("laugh");
    expect(result).toEqual([]);
  });

  it("returns matching emojis sorted by score", () => {
    vi.mocked(getSearchMatchScore).mockImplementation((emoji, _) => {
      if (emoji.emoji === "😀") return 500;
      if (emoji.emoji === "😷") return 1000;
      return 0;
    });

    const result = searchToArr("face");
    expect(result).toEqual(["😷", "😀"]);
  });

  it("returns sorted emojis when multiple emojis have different scores", () => {
    vi.mocked(getSearchMatchScore).mockImplementation((emoji, _) => {
      if (emoji.emoji === "😀") return 500;
      if (emoji.emoji === "😷") return 1000;
      if (emoji.emoji === ":)") return 1500;
      return 0;
    });

    const result = searchToArr("laugh");
    expect(result).toEqual([":)", "😷", "😀"]);
  });

  it("handles empty query", () => {
    vi.mocked(getSearchMatchScore).mockImplementation((emoji, _) => {
      if (emoji.emoji === "😀") return 500;
      if (emoji.emoji === "😷") return 1000;
      return 0;
    });

    const result = searchToArr("");
    expect(result).toEqual(["😷", "😀", ":)"]);
  });

  it("returns emojis even if they have score 0 (only if search is empty)", () => {
    vi.mocked(getSearchMatchScore).mockImplementation((emoji, _) => {
      if (emoji.emoji === "😷") return 1000;
      if (emoji.emoji === "😀") return 500;
      return 0;
    });

    expect(searchToArr("smile")).toEqual(["😷", "😀"]);
    expect(searchToArr("")).toEqual(["😷", "😀", ":)"]);
  });
});
