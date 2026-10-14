/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TAWK_PROPERTY_ID?: string
  readonly VITE_TAWK_WIDGET_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  Tawk_API?: Record<string, unknown>
  Tawk_LoadStart?: Date
}

declare module '*.PNG' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.avif' {
  const src: string;
  export default src;
}
