import { EmojiData } from "../lib/emojis";
import getSearchMatchScore from "./getSearchMatchScore";

const defaultEmoji = {
  name: "name very long",
  description: "description",
  code: "zode",
  tags: ["ridge", "bridge", "halt", "calt", "calrid"],
  category: "category",
  emoji: "emoji",
  number: 1,
  subCategory: "subCategory",
} as EmojiData;

const nameStartsEmoji = {
  ...defaultEmoji,
  name: "starts middle ends",
} as EmojiData;

describe("getSearchMatchScore", () => {
  it.each`
    name               | score
    ${"starts"}        | ${1000}
    ${"starts middle"} | ${1000}
    ${"middle"}        | ${500}
    ${"ends"}          | ${500}
  `(
    "returns correct score for match in name: $name -> $score",
    ({ name, score }) => {
      expect(getSearchMatchScore(nameStartsEmoji, name)).toBe(score);
    }
  );

  it.each`
    description      | score
    ${"description"} | ${11}
    ${"descrip"}     | ${7}
    ${"desc"}        | ${4}
  `(
    "returns correct score for match in description: $description -> $score",
    ({ description, score }) => {
      expect(getSearchMatchScore(defaultEmoji, description)).toBe(score);
    }
  );

  it.each`
    code      | score
    ${"zode"} | ${500}
    ${"zod"}  | ${10}
    ${"z"}    | ${10}
  `(
    "returns correct score for match in code: $code -> $score",
    ({ code, score }) => {
      expect(getSearchMatchScore(defaultEmoji, code)).toBe(score);
    }
  );

  it.each`
    tag          | score
    ${"ridge"}   | ${45}
    ${"bridge"}  | ${30}
    ${"halt"}    | ${30}
    ${"brid"}    | ${15}
    ${"cal"}     | ${30}
    ${"rid"}     | ${45}
    ${"another"} | ${0}
  `(
    "returns correct score for match in tags: $tag -> $score",
    ({ tag, score }) => {
      expect(getSearchMatchScore(defaultEmoji, tag)).toBe(score);
    }
  );

  it.each`
    query                    | score
    ${"this does not match"} | ${0}
    ${""}                    | ${0}
  `("returns 0 for no match in query: $query -> $score", ({ query, score }) => {
    expect(getSearchMatchScore(defaultEmoji, query)).toBe(score);
  });
});
