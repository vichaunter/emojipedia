import { useShallow } from "zustand/shallow";
import { EmojiData } from "../../lib/emojis";
import useEmojiStore from "../../stores/useEmojiStore";
import CopyButton from "../UI/CopyButton";
import TextHighlighted from "../UI/TextHighlighted";

type Props = {
  items: EmojiData[];
};
const EmojiListRows = ({ items }: Props) => {
  const { query } = useEmojiStore(
    useShallow((state) => ({ query: state.query }))
  );

  return (
    <div className="space-y-4">
      {items.map((emoji) => (
        <div
          key={emoji.code}
          className="flex bg-gray-800 p-4 rounded-md items-center"
        >
          {/* Left section: emoji and copy button */}
          <div className="flex flex-col items-center mr-4 justify-between">
            <div className="text-6xl mb-5" data-testid="emoji">
              {emoji.emoji}
            </div>
            <CopyButton text={emoji.emoji} />
          </div>

          <div className="flex-grow">
            <div className="font-bold text-xl flex">
              <div className="font-normal mr-2">Name:</div>{" "}
              <TextHighlighted query={query} text={emoji.name} />
            </div>
            <p className="text-gray-400">
              <span className="font-medium">Category:</span>{" "}
              <TextHighlighted query={query} text={emoji.category} />
            </p>
            <p className="text-gray-400">
              <span className="font-medium">Code:</span>{" "}
              <TextHighlighted query={query} text={emoji.code} />
            </p>
            <div className="mt-2">
              <span className="font-medium">Description:</span>
              <p className="mt-1 text-gray-300 text-sm">
                <TextHighlighted query={query} text={emoji.description} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmojiListRows;
