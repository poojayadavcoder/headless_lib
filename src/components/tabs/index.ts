import { Tabs } from "./Tabs"
import { TabsList } from "./TabsList"
import { TabsTrigger } from "./TabsTrigger"
import { TabsContent } from "./TabsContent"

type TabsCompound = typeof Tabs & {
  List: typeof TabsList
  Trigger: typeof TabsTrigger
  Content: typeof TabsContent
}

const TabsComponent = Tabs as TabsCompound

TabsComponent.List = TabsList
TabsComponent.Trigger = TabsTrigger
TabsComponent.Content = TabsContent

export default TabsComponent