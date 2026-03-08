interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    value?: string | string[];
    onValueChange?: (value: any) => void;
    defaultValue?: string | string[];
}
export declare function Accordion({ children, value: controlledValue, onValueChange, defaultValue, className, style, ...props }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
