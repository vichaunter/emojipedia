import { EmojiData } from "../lib/emojis";
import getSearchMatchScore from "./getSearchMatchScore";

export function searchEmojis(
  query: string,
  data: Record<string, EmojiData>
): EmojiData[] {
  const scoredResults: { emoji: EmojiData; score: number }[] = [];

  for (const emoji of Object.values(data)) {
    const score = getSearchMatchScore(emoji, query);

    if (query && score === 0) continue;

    scoredResults.push({
      emoji,
      score,
    });
  }

  scoredResults.sort((a, b) => b.score - a.score);

  return scoredResults.map(({ emoji }) => emoji);
}
