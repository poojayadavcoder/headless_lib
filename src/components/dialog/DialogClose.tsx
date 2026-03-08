import { useDialog } from "./context"

export function DialogClose() {
  const { setOpen } = useDialog()

  return (
    <button onClick={() => setOpen(false)}>
      Close
    </button>
  )
}