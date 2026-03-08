import { createPortal } from "react-dom"
import { useDialog } from "./context"

interface DialogOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DialogOverlay({ className, style, ...props }: DialogOverlayProps) {
  const { open } = useDialog()

  if (!open) return null

  return createPortal(
    <div
      {...props}
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...style
      }}
    />,
    document.body
  )
}
