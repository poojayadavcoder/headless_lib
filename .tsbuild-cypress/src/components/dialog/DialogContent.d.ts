interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare function DialogContent({ children, className, style, ...props }: DialogContentProps): import("react").ReactPortal | null;
export {};
