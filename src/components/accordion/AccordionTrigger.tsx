import { useAccordion } from "./context"
import { useItem } from "./AccordionItem"

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({
  children,
  ...props
}: AccordionTriggerProps) {
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
      {...props}
      aria-expanded={isOpen}
      onClick={(e) => {
        handleToggle()
        props.onClick?.(e)
      }}
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