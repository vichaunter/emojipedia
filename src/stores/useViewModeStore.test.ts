import { act } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import useViewModeStore, { ViewMode } from "./useViewModeStore";

describe("useViewModeStore", () => {
  beforeEach(() => {
    useViewModeStore.setState({ mode: ViewMode.grid });
  });

  it("should have 'grid' as the initial mode", () => {
    expect(useViewModeStore.getState().mode).toBe(ViewMode.grid);
  });

  it("should update mode with setMode", () => {
    act(() => {
      useViewModeStore.getState().setMode(ViewMode.list);
    });

    expect(useViewModeStore.getState().mode).toBe(ViewMode.list);
  });

  it("should toggle mode between grid and list", () => {
    act(() => {
      useViewModeStore.getState().toggleMode();
    });

    expect(useViewModeStore.getState().mode).toBe(ViewMode.list);

    act(() => {
      useViewModeStore.getState().toggleMode();
    });

    expect(useViewModeStore.getState().mode).toBe(ViewMode.grid);
  });
});
