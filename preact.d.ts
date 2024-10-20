export {};

declare global {
  namespace preact.createElement.JSX {
    interface HTMLAttributes {
      fetchPriority?: string | undefined;
    }
  }
}
