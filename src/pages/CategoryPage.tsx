import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import EmojiList from "../components/EmojiList/EmojiList";
import Page from "../components/layout/Page";
import SearchForm from "../components/SearchForm/SearchForm";
import slugify from "../helpers/slugify";
import { EmojiData } from "../lib/emojis";
import useEmojiStore from "../stores/useEmojiStore";

function CategoryPage() {
  const location = useLocation();
  const { category } = useParams<{ category: string }>();
  const { searchEmojis, categories, emojis: baseEmojis } = useEmojiStore();
  const [emojis, setEmojis] = useState<EmojiData[]>(
    Object.values(baseEmojis) || []
  );

  useEffect(() => {
    if (!category) return;

    handleOnSearch("");
  }, [location]);

  const handleOnSearch = useCallback(
    (query: string) => {
      let results: EmojiData[] = searchEmojis(query || "").filter(
        (emoji) => slugify(emoji.category) === category
      );
      if (query.length < 3) {
        results = results.slice(0, 12);
      }
      setEmojis(results);
    },
    [searchEmojis, location]
  );

  const categoryName = categories.find(
    (cat) => slugify(cat.name) === category
  )?.name;

  return (
    <Page>
      <h1 className="text-3xl font-bold">
        Emojis for category {categoryName || category}
      </h1>
      <p className="mt-4 text-lg">Enjoy browsing all available emojis! 🚀</p>
      <p className="mt-4 text-sm">
        If you are thinking on copy the entire site or try to steal the emojis,
        don't make the effort here is my
        <a
          className="text-amber-700 m-1"
          href="https://github.com/vichaunter/emojipedia"
          target="_blank"
        >
          Github repo 😉
        </a>
      </p>
      <p className="mt-4 text-md font-bold">
        If there is missing some emoji open a
        <a
          className="text-amber-700 m-1"
          href="https://github.com/vichaunter/emojipedia/issues"
          target="_blank"
        >
          Ticket
        </a>
        and i will add it, or if you find a bug 😋
      </p>
      <SearchForm
        onSearch={handleOnSearch}
        placeholder="Search in this category"
      />

      <EmojiList items={emojis} />
    </Page>
  );
}

export default CategoryPage;
