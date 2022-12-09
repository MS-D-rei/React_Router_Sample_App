/// <reference types='vite/client' />

// Env Variables and Modes
// https://vitejs.dev/guide/env-and-mode.html#env-files

interface ImportMetaEnv {
  readonly VITE_FIREBASE_DOMAIN: string;
  readonly VITE_FIREBASE_WEB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
