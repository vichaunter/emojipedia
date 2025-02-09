import { EmojiData } from "../lib/emojis";

function getSearchMatchScore(emoji: EmojiData, query: string): number {
  if (!query) return 0;

  const normalizedQuery = query.toLowerCase();
  let score = 0;

  const name = emoji.name.toLowerCase();
  const description = emoji.description.toLowerCase();
  const code = emoji.code.toLowerCase();
  const tags = emoji.tags.map((tag) => tag.toLowerCase());

  if (name.includes(normalizedQuery)) {
    score += name.startsWith(normalizedQuery) ? 1000 : 500;
  }

  if (description.includes(normalizedQuery)) {
    score += Math.min(
      20,
      (description.match(new RegExp(normalizedQuery, "g")) || []).reduce(
        (acc, match) => acc + match.length,
        0
      )
    );
  }

  if (code.includes(normalizedQuery)) {
    if (code === normalizedQuery) {
      score += 500;
    } else {
      score += 10;
    }
  }

  for (const tag of tags) {
    if (!tag.includes(normalizedQuery)) continue;

    if (tag === normalizedQuery) {
      score += 30;
      continue;
    }

    score += 15;
  }

  return score;
}

export default getSearchMatchScore;
