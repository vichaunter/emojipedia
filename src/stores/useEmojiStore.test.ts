import { act } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { EmojiData } from "../lib/emojis";
import useEmojiStore from "./useEmojiStore";

const emojiData = {
  "😀": {
    code: "U+1F600",
    emoji: "😀",
    number: 1,
    name: "grinning face",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["smile", "happy", "joy"],
    description:
      "A classic yellow grinning face with wide-open eyes and a broad smile, symbolizing extreme happiness, positivity, or lightheartedness. Often used to express joy, laughter, or friendliness in casual conversations.",
  },
  "😃": {
    code: "U+1F603",
    emoji: "😃",
    number: 2,
    name: "grinning face with big eyes",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["excited", "enthusiasm", "surprise"],
    description:
      "A grinning face with oversized, sparkling eyes and an open smile. Conveys excitement, eagerness, or pleasant surprise. Frequently used to amplify enthusiasm or react to thrilling news.",
  },
  "😄": {
    code: "U+1F604",
    emoji: "😄",
    number: 3,
    name: "grinning face with smiling eyes",
    category: "Smileys & Emotion",
    subCategory: "face-smiling",
    tags: ["warm", "content", "smiling eyes"],
    description:
      "A friendly face with a closed-mouth smile and crescent-shaped eyes, representing warm contentment or quiet happiness. Ideal for expressing gratitude, calm joy, or a subtle sense of humor.",
  },
};

describe("useEmojiStore", () => {
  beforeEach(() => {
    useEmojiStore.setState({
      emojis: emojiData,
      searchCache: {},
      query: "",
    });
  });

  it("should initialize with default values", () => {
    const state = useEmojiStore.getState();

    expect(state.emojis).toEqual(emojiData);
    expect(state.categories.length).toBeGreaterThan(0);
    expect(state.subCategories.length).toBeGreaterThan(0);
    expect(state.tags.length).toBeGreaterThan(0);
    expect(state.searchCache).toEqual({});
    expect(state.query).toBe("");
  });

  it("should update emojis with setEmojis", () => {
    const newEmojis = {
      "😊": { name: "Smile", emoji: "😊", category: "Smileys" } as EmojiData,
    };

    act(() => {
      useEmojiStore.getState().setEmojis(newEmojis);
    });

    expect(useEmojiStore.getState().emojis).toEqual(newEmojis);
  });

  it("should search and cache emoji results", () => {
    const query = "smile";

    act(() => {
      useEmojiStore.getState().searchEmojis(query);
    });

    const state = useEmojiStore.getState();
    expect(state.query).toBe(query);
    expect(state.searchCache).toHaveProperty(query);
    expect(state.searchCache[query].length).toBeGreaterThan(0);
  });

  it("should return cached search results", () => {
    const query = "smile";

    act(() => {
      useEmojiStore.getState().searchEmojis(query);
    });

    const firstCall = useEmojiStore.getState().searchCache[query];

    act(() => {
      useEmojiStore.getState().searchEmojis(query);
    });

    const secondCall = useEmojiStore.getState().searchCache[query];

    expect(secondCall).toBe(firstCall);
  });
});
