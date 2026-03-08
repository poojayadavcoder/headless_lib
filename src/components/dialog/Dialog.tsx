import { useState } from "react"
import { DialogContext } from "./context"

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export function Dialog({ 
  children, 
  open: controlledOpen, 
  onOpenChange, 
  defaultOpen = false,
  className,
  style,
  ...props 
}: DialogProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value)
    }
    onOpenChange?.(value)
  }

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      <div {...props} className={className} style={style}>
        {children}
      </div>
    </DialogContext.Provider>
  )
}