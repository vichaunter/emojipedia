import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useViewModeStore from "../../stores/useViewModeStore";
import SearchForm from "./SearchForm";

vi.mock("../UI/Tooltip", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("../../stores/useViewModeStore", () => {
  const toggleMode = vi.fn();

  return {
    __esModule: true,
    default: vi.fn(() => ({
      mode: "list",
      toggleMode,
    })),
    ViewMode: { list: "list", grid: "grid" },
  };
});

describe("SearchForm component", () => {
  let mockOnSearch: typeof vi.mock;
  let mockToggleMode: typeof vi.mock;

  beforeEach(() => {
    mockOnSearch = vi.fn();
    const store = useViewModeStore();
    mockToggleMode = store.toggleMode;
    vi.mocked(mockToggleMode).mockClear();
  });

  const renderSearchForm = (props = {}) =>
    render(<SearchForm onSearch={mockOnSearch} {...props} />);

  it("renders input field and search button", () => {
    renderSearchForm();
    expect(screen.getByPlaceholderText("Search emojis...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "🔍" })).toBeInTheDocument();
  });

  it("calls onSearch when input value changes", () => {
    renderSearchForm();
    const input = screen.getByPlaceholderText("Search emojis...");
    fireEvent.change(input, { target: { value: "smile" } });
    expect(mockOnSearch).toHaveBeenCalledWith("smile");
  });

  it("submits search query on form submit", () => {
    renderSearchForm();
    const input = screen.getByPlaceholderText("Search emojis...");
    const button = screen.getByRole("button", { name: "🔍" });
    fireEvent.change(input, { target: { value: "heart" } });
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalledWith("heart");
  });

  it("toggles view mode when the toggle button is clicked", () => {
    renderSearchForm();
    const toggleButton = screen.getByRole("button", { name: "🔄 Grid" });
    fireEvent.click(toggleButton);

    expect(mockToggleMode).toHaveBeenCalled();
  });
});
