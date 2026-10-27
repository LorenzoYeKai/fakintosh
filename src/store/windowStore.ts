"use client";

import { createContext, useContext } from "react";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

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

export const createWindowStore = (windowId = 1, folder?: string) =>
  createStore<WindowState & WindowActions>((set) => ({
    stack: [folder ? finderId : windowId],
    finderStack: folder ? [folder] : [],
    activeFinderIndex: folder ? 0 : -1,
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
        if (p.finderStack[p.activeFinderIndex] === path) {
          return p;
        }
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

export const WindowStoreContext = createContext<ReturnType<typeof createWindowStore> | null>(null);

export function useWindowStore<T>(selector: (state: WindowState & WindowActions) => T): T {
  const store = useContext(WindowStoreContext);
  if (!store) throw new Error("WindowStoreProvider is required");
  return useStore(store, selector);
}
