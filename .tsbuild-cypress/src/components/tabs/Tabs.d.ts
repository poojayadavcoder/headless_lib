interface TabsProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
}
export declare function Tabs({ value: controlledValue, defaultValue, onValueChange, children }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
