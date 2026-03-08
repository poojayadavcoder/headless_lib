import { useDialog } from "./context"

interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DialogTrigger({ children, ...props }: DialogTriggerProps) {
  const { setOpen } = useDialog()

  return (
    <button
      {...props}
      aria-haspopup="dialog"
      onClick={(e) => {
        setOpen(true)
        props.onClick?.(e)
      }}
    >
      {children}
    </button>
  )
}