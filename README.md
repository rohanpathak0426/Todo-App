# Todo Studio

A responsive todo application built with Vite and vanilla JavaScript.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Structure

- `index.html` - application shell and metadata
- `src/main.js` - todo state, rendering, events, filtering, sorting, and persistence
- `src/style.css` - responsive design system, layout, themes, and animation
- `package.json` - project scripts and dependencies

Todos are saved in `localStorage`, so they remain after a browser refresh. The selected light or dark theme is saved there as well.
