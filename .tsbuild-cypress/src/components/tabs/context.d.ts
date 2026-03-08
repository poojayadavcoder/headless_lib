type TabsContextType = {
    value: string;
    setValue: (value: string) => void;
};
export declare const TabsContext: import("react").Context<TabsContextType | null>;
export declare function useTabs(): TabsContextType;
export {};
