interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}
export declare function DropdownMenu({ children, open: controlledOpen, onOpenChange, defaultOpen, className, style, ...props }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
