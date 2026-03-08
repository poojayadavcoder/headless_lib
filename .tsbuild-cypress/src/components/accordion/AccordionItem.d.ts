interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare function AccordionItem({ value, children, ...props }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
export declare function useItem(): string;
export {};
