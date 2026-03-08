import { Dialog as BaseDialog } from "./Dialog";
import { DialogTrigger } from "./DialogTrigger";
import { DialogContent } from "./DialogContent";
import { DialogClose } from "./DialogClose";
import { DialogTitle } from "./DialogTitle";
import { DialogOverlay } from "./DialogOverlay";
type DialogType = typeof BaseDialog & {
    Trigger: typeof DialogTrigger;
    Content: typeof DialogContent;
    Close: typeof DialogClose;
    Title: typeof DialogTitle;
    Overlay: typeof DialogOverlay;
};
declare const Dialog: DialogType;
export default Dialog;
