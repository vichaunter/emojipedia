import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HomePage from "./HomePage";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(() => ({
    pathname: "/",
    search: "",
    hash: "",
    state: null,
  })),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => {
    return <a href={to}>{children}</a>;
  },
}));

vi.mock("../components/SearchForm/SearchForm", () => ({
  __esModule: true,
  default: () => {
    return <input data-testid="search-input" value="defaultValue" />;
  },
}));

vi.mock("../components/EmojiList/EmojiList", () => ({
  __esModule: true,
  default: () => {
    return (
      <ul>
        <li>grinning face</li>
        <li>sunglasses</li>
      </ul>
    );
  },
}));

describe("HomePage", () => {
  it("renders HomePage with the correct static content", async () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Welcome to the real Ads Free Emoji Site!/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Enjoy browsing all available emojis!/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /If you are thinking on copy the entire site or try to steal the emojis,/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/If there is missing some emoji open a/i)
    ).toBeInTheDocument();
  });

  it("renders SearchForm and EmojiList components", async () => {
    render(<HomePage />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByText("grinning face")).toBeInTheDocument();
    expect(screen.getByText("sunglasses")).toBeInTheDocument();
  });
});
