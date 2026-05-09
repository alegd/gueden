declare global {
  interface Window {
    turnstile?: {
      reset: (widgetIdOrContainer?: string | HTMLElement) => void;
      getResponse: (widgetIdOrContainer?: string | HTMLElement) => string | undefined;
      remove: (widgetIdOrContainer?: string | HTMLElement) => void;
    };
  }
}

export {};
