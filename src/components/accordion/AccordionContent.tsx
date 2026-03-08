import { useAccordion } from "./context"
import { useItem } from "./AccordionItem"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({
  children,
  ...props
}: AccordionContentProps) {
  const { openItem } = useAccordion()
  const value = useItem()

  const isOpen = Array.isArray(openItem) 
    ? openItem.includes(value) 
    : openItem === value

  if (!isOpen) return null

  return <div {...props}>{children}</div>
}