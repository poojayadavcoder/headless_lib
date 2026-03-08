type DropdownContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};
export declare const DropdownContext: import("react").Context<DropdownContextType | null>;
export declare function useDropdown(): DropdownContextType;
export {};
