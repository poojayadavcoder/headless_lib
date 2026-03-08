type AccordionContextType = {
    openItem: string | string[] | null;
    setOpenItem: (value: any) => void;
};
export declare const AccordionContext: import("react").Context<AccordionContextType | null>;
export declare function useAccordion(): AccordionContextType;
export {};
