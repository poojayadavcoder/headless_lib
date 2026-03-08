import { useDialog } from "./context"

interface DialogCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DialogClose({ children, ...props }: DialogCloseProps) {
  const { setOpen } = useDialog()

  return (
    <button 
      {...props}
      onClick={(e) => {
        setOpen(false)
        props.onClick?.(e)
      }}
    >
      {children || "Close"}
    </button>
  )
}