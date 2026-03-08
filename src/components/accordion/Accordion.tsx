import { useState } from "react"
import { AccordionContext } from "./context"

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  value?: string | string[]
  onValueChange?: (value: any) => void
  defaultValue?: string | string[]
}

export function Accordion({ 
  children, 
  value: controlledValue, 
  onValueChange, 
  defaultValue,
  className,
  style,
  ...props 
}: AccordionProps) {
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
      <div 
        {...props}
        className={className}
        style={style}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}