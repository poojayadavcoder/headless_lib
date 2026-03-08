interface DropdownProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultOpen?: boolean;
}
export declare function DropdownMenu({ children, open: controlledOpen, onOpenChange, defaultOpen }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
