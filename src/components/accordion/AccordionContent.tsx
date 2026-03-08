import { useAccordion } from "./context"
import { useItem } from "./AccordionItem"

export function AccordionContent({
  children
}: {
  children: React.ReactNode
}) {
  const { openItem } = useAccordion()
  const value = useItem()

  const isOpen = Array.isArray(openItem) 
    ? openItem.includes(value) 
    : openItem === value

  if (!isOpen) return null

  return <div>{children}</div>
}