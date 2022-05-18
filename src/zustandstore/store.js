import create from 'zustand'

/// Reducer  --->

export const useStore = create(set => ({
  count: 0,
  increaseCount: () => set(state => ({ count: state.count + 1 })),
  removeAllCount: () => set({ count: 0 })
}))