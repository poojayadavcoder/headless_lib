import { useEffect, useRef, useState } from "react"
import { useDropdown } from "./context"

export function DropdownMenuContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { open, setOpen } = useDropdown()
  const contentRef = useRef<HTMLDivElement>(null)
  const [typeahead, setTypeahead] = useState("")
  const typeaheadTimerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!contentRef.current) return

      const items = Array.from(contentRef.current.querySelectorAll('[role="menuitem"]')) as HTMLElement[]
      const currentIndex = items.indexOf(document.activeElement as HTMLElement)

      if (e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % items.length
        items[nextIndex]?.focus()
        e.preventDefault()
      } else if (e.key === "ArrowUp") {
        const prevIndex = (currentIndex - 1 + items.length) % items.length
        items[prevIndex]?.focus()
        e.preventDefault()
      } else if (e.key === "Home") {
        items[0]?.focus()
        e.preventDefault()
      } else if (e.key === "End") {
        items[items.length - 1]?.focus()
        e.preventDefault()
      } else if (e.key === "Escape") {
        setOpen(false)
        e.preventDefault()
      } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const newTypeahead = typeahead + e.key.toLowerCase()
        setTypeahead(newTypeahead)

        if (typeaheadTimerRef.current) window.clearTimeout(typeaheadTimerRef.current)
        typeaheadTimerRef.current = window.setTimeout(() => setTypeahead(""), 500)

        const match = items.find(item => 
          item.textContent?.toLowerCase().startsWith(newTypeahead)
        )
        if (match) match.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    
    const items = contentRef.current ? Array.from(contentRef.current.querySelectorAll('[role="menuitem"]')) as HTMLElement[] : []
    if (items.length > 0) items[0].focus()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      if (typeaheadTimerRef.current) window.clearTimeout(typeaheadTimerRef.current)
    }
  }, [open, setOpen, typeahead])

  if (!open) return null

  return (
    <div
      ref={contentRef}
      id="dropdown-menu"
      role="menu"
      className={className}
      style={{
        position: "absolute",
        top: "100%",
        zIndex: 50,
      }}
    >
      {children}
    </div>
  )
}