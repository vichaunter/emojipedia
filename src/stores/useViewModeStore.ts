import { create } from "zustand";

export enum ViewMode {
    grid = 'grid',
    list = 'list'
}

export interface ViewModeStore {
    mode: ViewMode
    setMode: (mode: ViewMode) => void
    toggleMode: () => void
}

const useViewModeStore = create<ViewModeStore>((set) => ({
    mode: ViewMode.grid,
    setMode: (mode) => set({ mode }),
    toggleMode: () => set(state => ({
        mode: state.mode === ViewMode.grid ? ViewMode.list : ViewMode.grid
    }))
}))

export default useViewModeStore