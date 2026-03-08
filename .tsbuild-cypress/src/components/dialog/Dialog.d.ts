interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}
export declare function Dialog({ children, open: controlledOpen, onOpenChange, defaultOpen, className, style, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export {};
