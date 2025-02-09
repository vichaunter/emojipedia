import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip Component", () => {
  const setup = ({
    text = "Tooltip text",
    position = "top",
    disabled = false,
  }: {
    text?: string;
    position?: "top" | "right";
    disabled?: boolean;
  } = {}) => {
    render(
      <Tooltip text={text} position={position} disabled={disabled}>
        <button>Hover me</button>
      </Tooltip>
    );
  };

  it("renders children correctly", () => {
    setup();

    const button = screen.getByText("Hover me");
    const tooltip = screen.getByText("Tooltip text");
    expect(button).toBeInTheDocument();
    expect(tooltip).toBeInTheDocument();
  });

  it("shows tooltip on hover and hides on unhover", async () => {
    setup();

    const button = screen.getByText("Hover me");
    const tooltip = screen.getByTestId("tooltip");

    const initialTransform = getComputedStyle(tooltip).transform;
    expect(initialTransform).toBe("scale(0)");

    fireEvent.mouseEnter(button);

    await waitFor(() => {
      const transformAfterHover = getComputedStyle(tooltip).transform;
      expect(transformAfterHover).toBe("scale(1)");
    });

    fireEvent.mouseLeave(button);

    await waitFor(() => {
      const transformAfterLeave = getComputedStyle(tooltip).transform;
      expect(transformAfterLeave).toBe("scale(0)");
    });
  });

  it("does not show tooltip when disabled", () => {
    setup({
      disabled: true,
    });

    const tooltip = screen.queryByTestId("tooltip");

    expect(tooltip).toBeNull();
  });

  it("applies correct position class based on prop", () => {
    setup({
      position: "right",
    });

    const tooltip = screen.getByTestId("tooltip");

    expect(tooltip).toHaveClass(/left-full/);
  });

  it("renders tooltip with default position (top)", () => {
    setup();
    const tooltip = screen.getByTestId("tooltip");

    expect(tooltip).toHaveClass(/-top-full/);
  });
});
