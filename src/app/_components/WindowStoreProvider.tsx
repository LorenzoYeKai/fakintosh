"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { getPortfolioPage } from "@/lib/site";
import { createWindowStore, WindowStoreContext } from "@/store/windowStore";

function RouteWindowStore({ path, children }: { path: string; children: ReactNode }) {
  const [store] = useState(() => {
    const page = getPortfolioPage(path);
    return createWindowStore(page?.windowId, page?.folder);
  });

  return <WindowStoreContext.Provider value={store}>{children}</WindowStoreContext.Provider>;
}

export default function WindowStoreProvider({ children }: { children: ReactNode }) {
  const path = usePathname();
  return <RouteWindowStore key={path} path={path}>{children}</RouteWindowStore>;
}
