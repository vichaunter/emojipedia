import { create } from "zustand";
import { searchEmojis } from "../helpers/searchEmojis";
import slugify from "../helpers/slugify";
import { EmojiData, EMOJIS } from "../lib/emojis";

type Category = {
  name: string;
  emoji: string;
  slug: string;
};

interface EmojiStore {
  emojis: Record<string, EmojiData>;
  searchCache: Record<string, EmojiData[]>;
  categories: Category[];
  subCategories: string[];
  tags: string[];
  query?: string;
  setEmojis: (data: Record<string, EmojiData>) => void;
  searchEmojis: (query: string) => EmojiData[];
}

const emojisArr = Object.values(EMOJIS);

const categoriesList = [
  ...new Set(emojisArr.map((emoji) => emoji.category)),
].sort();

const subCategories = [
  ...new Set(emojisArr.map((emoji) => emoji.subCategory)),
].sort();

const tags = [...new Set(emojisArr.flatMap((emoji) => emoji.tags))].sort();

const useEmojiStore = create<EmojiStore>((set, get) => ({
  emojis: EMOJIS,
  categories: categoriesList.map((name) => ({
    name,
    emoji: emojisArr.find((emoji) => emoji.category === name)?.emoji || "",
    slug: slugify(name),
  })),
  subCategories,
  tags,
  searchCache: {},
  query: "",
  setEmojis: (emojis) => set({ emojis }),
  searchEmojis: (query: string) => {
    const lowerQuery = query.toLowerCase();
    if (get().query !== lowerQuery) set({ query: lowerQuery });

    const cache = get().searchCache;
    if (cache[lowerQuery]) return cache[lowerQuery];

    const results = searchEmojis(lowerQuery, get().emojis);
    set((state) => ({
      searchCache: { ...state.searchCache, [lowerQuery]: results },
    }));

    return results;
  },
}));

export default useEmojiStore;
