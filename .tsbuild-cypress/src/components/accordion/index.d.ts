import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionContent } from "./AccordionContent";
type AccordionCompound = typeof Accordion & {
    Item: typeof AccordionItem;
    Trigger: typeof AccordionTrigger;
    Content: typeof AccordionContent;
};
declare const AccordionComponent: AccordionCompound;
export default AccordionComponent;
