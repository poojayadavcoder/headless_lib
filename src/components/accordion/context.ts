import { createContext, useContext } from "react"

type AccordionContextType = {
  openItem: string | string[] | null
  setOpenItem: (value: any) => void
}

export const AccordionContext =
  createContext<AccordionContextType | null>(null)

export function useAccordion() {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error("Accordion components must be inside Accordion")
  }

  return context
}