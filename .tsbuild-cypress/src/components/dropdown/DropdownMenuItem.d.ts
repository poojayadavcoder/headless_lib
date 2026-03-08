interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    onSelect?: () => void;
}
export declare function DropdownMenuItem({ children, onSelect, className, ...props }: DropdownMenuItemProps): import("react/jsx-runtime").JSX.Element;
export {};
