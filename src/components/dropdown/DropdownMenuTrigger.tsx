import { useDropdown } from "./context"

export function DropdownMenuTrigger({
  children,
}: {
  children: React.ReactNode
}) {
  const { open, setOpen } = useDropdown()

  return (
    <button
       aria-haspopup="menu"
       aria-expanded={open}
       aria-controls="dropdown-menu"
       onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  )
}