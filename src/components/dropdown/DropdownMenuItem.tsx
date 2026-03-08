import { useDropdown } from "./context"

export function DropdownMenuItem({
  children,
  onSelect,
  className,
}: {
  children: React.ReactNode
  onSelect?: () => void
  className?: string
}) {
  const { setOpen } = useDropdown()

  const handleSelect = () => {
    onSelect?.()
    setOpen(false)
  }

  return (
    <div
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