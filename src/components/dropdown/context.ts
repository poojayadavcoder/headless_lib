import { createContext, useContext } from "react"

type DropdownContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const DropdownContext =
  createContext<DropdownContextType | null>(null)

export function useDropdown() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error("Dropdown components must be inside DropdownMenu")
  }

  return context
}