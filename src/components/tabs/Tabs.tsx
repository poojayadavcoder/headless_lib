import { useState } from "react"
import { TabsContext } from "./context"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Tabs({ 
  value: controlledValue, 
  defaultValue, 
  onValueChange, 
  children,
  className,
  style,
  ...props 
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const setValue = (val: string) => {
    if (!isControlled) {
      setInternalValue(val)
    }
    onValueChange?.(val)
  }

  return (
    <TabsContext.Provider value={{ value: value || "", setValue }}>
      <div {...props} className={className} style={style}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}