import { useRef, useEffect } from "react"

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function TabsList({ children, className, style, ...props }: TabsListProps) {
  const listRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!listRef.current) return
      
      const triggers = Array.from(listRef.current.querySelectorAll('[role="tab"]')) as HTMLElement[]
      const currentIndex = triggers.indexOf(document.activeElement as HTMLElement)
      
      if (currentIndex === -1) return

      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % triggers.length
        triggers[nextIndex]?.focus()
        triggers[nextIndex]?.click() 
        e.preventDefault()
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + triggers.length) % triggers.length
        triggers[prevIndex]?.focus()
        triggers[prevIndex]?.click()
        e.preventDefault()
      }
    }

    const el = listRef.current
    el?.addEventListener("keydown", handleKeyDown)
    return () => el?.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div 
      {...props}
      ref={listRef} 
      role="tablist" 
      className={className} 
      style={{ display: "flex", gap: "8px", ...style }}
    >
      {children}
    </div>
  )
}