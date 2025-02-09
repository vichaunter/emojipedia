import { fireEvent, render, screen } from "@testing-library/react";
import { useLocation, useParams } from "react-router-dom";
import { vi } from "vitest";
import useEmojiStore from "../stores/useEmojiStore";
import CategoryPage from "./CategoryPage";

vi.mock("react-router-dom");
vi.mock("../stores/useEmojiStore");
vi.mock("../components/layout/Page", () => ({
  default: vi.fn(({ children }) => <div>{children}</div>),
}));

vi.mock("../components/SearchForm/SearchForm", () => ({
  default: vi.fn(({ onSearch, placeholder }) => (
    <input
      data-testid="search-input"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  )),
}));

vi.mock("../components/EmojiList/EmojiList", () => ({
  default: vi.fn(({ items }) => (
    <div data-testid="emoji-list">{items?.length} emojis</div>
  )),
}));

const mockSearchEmojis = vi.fn();
const mockEmojis = Array.from({ length: 15 }, (_, i) => ({
  name: `emoji-${i}`,
  category: "Test Category",
}));

describe("CategoryPage", () => {
  beforeEach(() => {
    vi.mocked(useParams).mockReturnValue({ category: "test-category" });
    vi.mocked(useLocation).mockReturnValue({
      pathname: "",
      search: "",
      state: null,
      key: "",
      hash: "",
    });

    vi.mocked(useEmojiStore).mockReturnValue({
      categories: [{ name: "Test Category" }],
      emojis: {},
      searchEmojis: mockSearchEmojis.mockImplementation((query) =>
        mockEmojis.filter((e) => e.name.includes(query))
      ),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders category name from store", () => {
    render(<CategoryPage />);
    expect(screen.getByText(/Test Category/)).toBeInTheDocument();
  });

  it("limits to 12 emojis on initial load", () => {
    render(<CategoryPage />);
    expect(screen.getByTestId("emoji-list")).toHaveTextContent("12 emojis");
  });

  it("shows all emojis when search query is 3+ characters", () => {
    render(<CategoryPage />);

    const input = screen.getByPlaceholderText("Search in this category");
    fireEvent.change(input, { target: { value: "emoji" } });

    expect(screen.getByTestId("emoji-list")).toHaveTextContent("15 emojis");
  });

  it("renders links correctly", () => {
    render(<CategoryPage />);

    const repoLink = screen.getByRole("link", { name: /Github repo/ });
    const ticketLink = screen.getByRole("link", { name: /Ticket/ });

    expect(repoLink).toBeInTheDocument();
    expect(ticketLink).toBeInTheDocument();
  });
});
