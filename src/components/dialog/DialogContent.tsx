import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useDialog } from "./context"

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function DialogContent({ children, className, style, ...props }: DialogContentProps) {
  const { open, setOpen } = useDialog()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        return
      }

      if (e.key === "Tab" && contentRef.current) {
        const focusableElements = contentRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKey)
    
    const focusable = contentRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable && focusable.length > 0) {
        (focusable[0] as HTMLElement).focus()
    }

    return () => {
      document.removeEventListener("keydown", handleKey)
    }
  }, [open, setOpen])

  if (!open) return null

  return createPortal(
    <div 
      {...props}
      ref={contentRef}
      role="dialog" 
      aria-modal="true"
      className={className}
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        background: 'white',
        padding: '2rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        ...style
      }}
    >
      {children}
    </div>,
    document.body
  )
}
