import { createContext, useContext } from "react"

const ItemContext = createContext<string | null>(null)

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function AccordionItem({
  value,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <ItemContext.Provider value={value}>
      <div {...props}>{children}</div>
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