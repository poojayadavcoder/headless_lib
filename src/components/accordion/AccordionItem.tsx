import { createContext, useContext } from "react"

const ItemContext = createContext<string | null>(null)

export function AccordionItem({
  value,
  children
}: {
  value: string
  children: React.ReactNode
}) {
  return (
    <ItemContext.Provider value={value}>
      <div>{children}</div>
    </ItemContext.Provider>
  )
}

export function useItem() {
  const context = useContext(ItemContext)

  if (!context) {
    throw new Error("Trigger must be inside AccordionItem")
  }

  return context
}