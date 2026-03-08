import { useDropdown } from "./context"

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void
}

export function DropdownMenuItem({
  children,
  onSelect,
  className,
  ...props
}: DropdownMenuItemProps) {
  const { setOpen } = useDropdown()

  const handleSelect = () => {
    onSelect?.()
    setOpen(false)
  }

  return (
    <div
      {...props}
      role="menuitem"
      tabIndex={0}
      className={className}
      onClick={handleSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSelect()
          e.preventDefault()
        }
      }}
      style={{
        outline: "none",
      }}
    >
      {children}
    </div>
  )
}