import { useState } from "react"
import { AccordionContext } from "./context"

interface AccordionProps {
  children: React.ReactNode
  value?: string | string[]
  onValueChange?: (value: any) => void
  defaultValue?: string | string[]
}

export function Accordion({ children, value: controlledValue, onValueChange, defaultValue }: AccordionProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || null)
  
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const setValue = (val: string | string[] | null) => {
    if (!isControlled) {
      setInternalValue(val)
    }
    onValueChange?.(val)
  }

  return (
    <AccordionContext.Provider value={{ openItem: value as any, setOpenItem: setValue }}>
      <div className="accordion-root">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}