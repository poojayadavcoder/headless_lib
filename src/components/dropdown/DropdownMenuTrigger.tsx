import { useDropdown } from "./context"

interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DropdownMenuTrigger({
  children,
  ...props
}: DropdownMenuTriggerProps) {
  const { open, setOpen } = useDropdown()

  return (
    <button
       aria-haspopup="menu"
       aria-expanded={open}
       aria-controls="dropdown-menu"
       {...props}
       onClick={(e) => {
         setOpen(!open)
         props.onClick?.(e)
       }}
       onKeyDown={(e) => {
         if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " " || e.key === "Enter") {
           setOpen(true)
           e.preventDefault()
         }
         props.onKeyDown?.(e)
       }}
    >
      {children}
    </button>
  )
}