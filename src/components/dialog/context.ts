import { createContext, useContext } from "react"

type DialogContextType = {
  open: boolean
  setOpen: (value: boolean) => void
}

export const DialogContext = createContext<DialogContextType | null>(null)

export function useDialog() {
  const context = useContext(DialogContext)

  if (!context) {
    throw new Error("Dialog components must be inside <Dialog>")
  }

  return context
}