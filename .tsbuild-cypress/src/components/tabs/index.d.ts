import { Tabs } from "./Tabs";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";
type TabsCompound = typeof Tabs & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};
declare const TabsComponent: TabsCompound;
export default TabsComponent;
