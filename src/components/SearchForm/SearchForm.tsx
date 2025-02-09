import useEmojiStore from "../../stores/useEmojiStore";
import useViewModeStore, { ViewMode } from "../../stores/useViewModeStore";
import Tooltip from "../UI/Tooltip";

type Props = {
  onSearch: (query: string) => void;
  defaultQuery?: string;
  placeholder?: string;
};

const SearchForm = ({ onSearch, placeholder = "Search emojis..." }: Props) => {
  const query = useEmojiStore((state) => state.query);

  const { mode: viewMode, toggleMode: toggleViewMode } = useViewModeStore();

  return (
    <div className="bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <form
          data-testid="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            query && onSearch(query);
          }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <div className="flex flex-grow">
            <input
              type="text"
              defaultValue={query}
              onChange={(e) => onSearch(e.target.value)}
              onInput={(e) => onSearch(e.currentTarget.value)}
              placeholder={placeholder}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <Tooltip text="Just for your mental peacefulness">
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white rounded-r-md cursor-pointer"
              >
                🔍
              </button>
            </Tooltip>
          </div>
          <button
            type="button"
            onClick={toggleViewMode}
            className="px-4 py-2 bg-stone-700 hover:bg-stone-600 rounded-md cursor-pointer"
          >
            🔄 {viewMode === ViewMode.list ? "Grid" : "List"}
          </button>
        </form>

        <h2 className="mt-6 text-2xl font-bold">
          Emojis in found for: <span className="text-blue-400">"{query}"</span>
        </h2>
      </div>
    </div>
  );
};

export default SearchForm;
