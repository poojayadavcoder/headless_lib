import { useDialog } from "./context"

interface DialogTriggerProps {
  children: React.ReactNode
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  const { setOpen } = useDialog()

  return (
    <button
      aria-haspopup="dialog"
      onClick={() => setOpen(true)}>
      {children}
    </button>
  )
}