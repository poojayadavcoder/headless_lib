import { createPortal } from "react-dom"
import { useDialog } from "./context"

export function DialogOverlay({ className }: { className?: string }) {
  const { open } = useDialog()

  if (!open) return null

  return createPortal(
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    />,
    document.body
  )
}
