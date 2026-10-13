import { RenderMode, ServerRoute } from '@angular/ssr';

/** GitHub Pages only serves files, so every page is prerendered at build time. */
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender }
];
