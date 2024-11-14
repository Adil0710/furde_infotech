export {};

declare global {
    interface Window {
        Calendly: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}
