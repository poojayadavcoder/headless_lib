import { useEffect, useRef, useState } from "react"
import { DropdownContext } from "./context"

interface DropdownProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export function DropdownMenu({ children, open: controlledOpen, onOpenChange, defaultOpen = false }: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const containerRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value)
    }
    onOpenChange?.(value)
  }

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={containerRef} style={{ position: "relative", display: "inline-block" }}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}