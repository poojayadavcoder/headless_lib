import { DropdownMenu } from "./DropdownMenu"
import { DropdownMenuTrigger } from "./DropdownMenuTrigger"
import { DropdownMenuContent } from "./DropdownMenuContent"
import { DropdownMenuItem } from "./DropdownMenuItem"

type DropdownCompound = typeof DropdownMenu & {
  Trigger: typeof DropdownMenuTrigger
  Content: typeof DropdownMenuContent
  Item: typeof DropdownMenuItem
}

const Dropdown = DropdownMenu as DropdownCompound

Dropdown.Trigger = DropdownMenuTrigger
Dropdown.Content = DropdownMenuContent
Dropdown.Item = DropdownMenuItem

export default Dropdown