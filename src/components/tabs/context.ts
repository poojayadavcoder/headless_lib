import { createContext, useContext } from "react"

type TabsContextType = {
  value: string
  setValue: (value: string) => void
}

export const TabsContext =
  createContext<TabsContextType | null>(null)

export function useTabs() {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error("Tabs components must be inside Tabs")
  }

  return context
}