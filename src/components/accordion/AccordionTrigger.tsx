import { useAccordion } from "./context"
import { useItem } from "./AccordionItem"

export function AccordionTrigger({
  children
}: {
  children: React.ReactNode
}) {
  const { openItem, setOpenItem } = useAccordion()
  const value = useItem()

  const isOpen = Array.isArray(openItem) 
    ? openItem.includes(value) 
    : openItem === value

  const handleToggle = () => {
    if (Array.isArray(openItem)) {
      if (isOpen) {
        setOpenItem(openItem.filter(i => i !== value))
      } else {
        setOpenItem([...openItem, value])
      }
    } else {
      setOpenItem(isOpen ? null : value)
    }
  }

  return (
    <button
      aria-expanded={isOpen}
      onClick={handleToggle}
      onKeyDown={(e) => {
        const triggers = Array.from(document.querySelectorAll('.accordion-root button')) as HTMLElement[]
        const index = triggers.indexOf(e.currentTarget)
        
        if (e.key === "ArrowDown") {
          triggers[(index + 1) % triggers.length]?.focus()
          e.preventDefault()
        } else if (e.key === "ArrowUp") {
          triggers[(index - 1 + triggers.length) % triggers.length]?.focus()
          e.preventDefault()
        }
      }}
    >
      {children}
    </button>
  )
}