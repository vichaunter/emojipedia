import { EmojiData } from "../../lib/emojis";
import useEmojiStore from "../../stores/useEmojiStore";
import CopyButton from "../UI/CopyButton";
import TextHighlighted from "../UI/TextHighlighted";

type Props = {
  items: EmojiData[];
};
const EmojiListGrid = ({ items }: Props) => {
  const query = useEmojiStore((state) => state.query);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((emoji) => (
          <div
            key={emoji.code}
            data-testid="emoji-grid-item"
            className="bg-gray-800 p-4 rounded-md flex flex-col items-center justify-between"
          >
            <div className="text-6xl">{emoji.emoji}</div>
            <div className="mt-2 font-bold text-lg mb-4">
              <TextHighlighted query={query} text={emoji.name} />
            </div>
            <CopyButton text={emoji.emoji} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiListGrid;
