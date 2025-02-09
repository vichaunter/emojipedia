import { EmojiData } from "../../lib/emojis";
import useViewModeStore from "../../stores/useViewModeStore";
import EmojiListGrid from "./EmojiListGrid";
import EmojiListRows from "./EmojiListRows";

type EmojiListProps = {
  items: EmojiData[];
};

const EmojiList = ({ items }: EmojiListProps) => {
  const { mode: viewMode } = useViewModeStore();

  if (items.length === 0) {
    return (
      <div className="mt-6">
        <p className="text-gray-400">No results found.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {viewMode === "grid" ? (
        <EmojiListGrid items={items} />
      ) : (
        <EmojiListRows items={items} />
      )}
    </div>
  );
};

export default EmojiList;
