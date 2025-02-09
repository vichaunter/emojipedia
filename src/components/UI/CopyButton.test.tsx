import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CopyButton from "./CopyButton";

describe("CopyButton component", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
    vi.clearAllMocks();
  });

  const setup = (text = "Test copy text") => {
    render(<CopyButton text={text} />);
  };

  it("renders correctly", () => {
    setup();

    expect(screen.getByRole("button", { name: /copy/i })).toBeInTheDocument();
  });

  it("copies text when button is clicked", async () => {
    setup();

    const button = screen.getByRole("button", { name: /copy/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "Test copy text"
      );
      expect(screen.getByText(/copied/i)).toBeInTheDocument();
    });
  });

  it("does not attempt to copy when text is empty", async () => {
    setup("");

    const button = screen.getByRole("button", { name: /copy/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).not.toHaveBeenCalled();
      expect(screen.getByText(/copy/i)).toBeInTheDocument();
    });
  });

  it("reverts back to 'Copy' after 3 seconds", async () => {
    vi.useFakeTimers({
      shouldAdvanceTime: true,
    });

    setup();

    const button = screen.getByRole("button", { name: /copy/i });

    fireEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText(/copied/i)).toBeInTheDocument()
    );

    vi.advanceTimersByTime(4000);

    await waitFor(() => expect(screen.getByText(/copy/i)).toBeInTheDocument());

    vi.useRealTimers();
  });
});
