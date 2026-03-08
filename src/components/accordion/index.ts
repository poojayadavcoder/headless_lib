import { Accordion } from "./Accordion"
import { AccordionItem } from "./AccordionItem"
import { AccordionTrigger } from "./AccordionTrigger"
import { AccordionContent } from "./AccordionContent"

type AccordionCompound = typeof Accordion & {
  Item: typeof AccordionItem
  Trigger: typeof AccordionTrigger
  Content: typeof AccordionContent
}

const AccordionComponent = Accordion as AccordionCompound

AccordionComponent.Item = AccordionItem
AccordionComponent.Trigger = AccordionTrigger
AccordionComponent.Content = AccordionContent

export default AccordionComponent