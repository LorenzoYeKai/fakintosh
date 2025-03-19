import { create } from "zustand";

export const finderId = -1;

type WindowState = {
  stack: number[];
  finderStack: string[];
  activeFinderIndex: number;
};

type WindowActions = {
  activateWindow: (id: number) => void;
  closeWindow: (id: number) => void;
  openWindow: (id: number) => void;
  setFinderPath: (path: string) => void;
  navigateFinder: (step: -1 | 1) => void;
};

export const useWindowStore = create<WindowState & WindowActions>((set) => ({
  stack: [1],
  finderStack: [],
  activeFinderIndex: -1,
  activateWindow: (id: number) => {
    set((p) => {
      const newStack = [...p.stack].filter((w) => w !== id);
      return {
        stack: [...newStack, id],
      };
    });
  },
  closeWindow: (id: number) => {
    set((p) => {
      return {
        stack: p.stack.filter((w) => w !== id),
      };
    });
  },
  openWindow: (id: number) =>
    set((p) => {
      if (p.stack.includes(id)) {
        if (id !== p.stack[p.stack.length - 1]) {
          const newStack = [...p.stack].filter((w) => w !== id);
          return {
            stack: [...newStack, id],
          };
        }
        return p;
      }
      return {
        stack: [...p.stack, id],
      };
    }),
  setFinderPath: (path: string) =>
    set((p) => {
      var newStack: WindowState["stack"] = p.stack;
      var newFinderStack: WindowState["finderStack"] = [...p.finderStack, path];
      if (p.stack.includes(finderId)) {
        // finder is open
        if (finderId !== p.stack[p.stack.length - 1]) {
          // set finder as active window
          newStack = [...p.stack.filter((w) => w !== finderId), finderId];
        }
      } else {
        newStack = [...p.stack, finderId];
      }
      if (p.activeFinderIndex !== p.finderStack.length - 1) {
        // erase future
        newFinderStack = [
          ...p.finderStack.slice(0, p.activeFinderIndex + 1),
          path,
        ];
      }
      return {
        stack: newStack,
        finderStack: newFinderStack,
        activeFinderIndex: p.activeFinderIndex + 1,
      };
    }),
  navigateFinder: (step: -1 | 1) =>
    set((p) => {
      const newIndex = p.activeFinderIndex + step;
      if (newIndex < 0 || newIndex >= p.finderStack.length) {
        return p;
      }
      return {
        activeFinderIndex: newIndex,
      };
    }),
}));
