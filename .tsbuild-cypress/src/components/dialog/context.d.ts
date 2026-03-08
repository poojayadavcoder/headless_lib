type DialogContextType = {
    open: boolean;
    setOpen: (value: boolean) => void;
};
export declare const DialogContext: import("react").Context<DialogContextType | null>;
export declare function useDialog(): DialogContextType;
export {};
