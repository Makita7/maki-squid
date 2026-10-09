# Maki Squid portfolio

Vue 3 + TypeScript + Tailwind CSS 4 + Vite.

## Run it

```bash
npm install
npm run dev       # opens the site while you work
npm run build     # makes the final site in /dist
```

## Add a new piece

1. Put the image in `public/images/work/`
2. Open `src/data/artworks.ts`
3. Copy an existing piece and change the values

```ts
{
  slug: 'my-new-piece',        // used in the link: /work/my-new-piece
  title: 'My new piece',
  year: 2026,
  category: 'color',           // 'color' | 'ink' | 'game-ui'
  image: 'my-new-piece.jpg',
  alt: 'Describe the image for people who cannot see it.',
  size: 'tall',                // how big it is in the gallery
}
```

Everything else is optional: `description`, `medium`, `tools`, `project`, `process`.
If you leave something out, it simply does not show.

The gallery follows the order of the list. First piece = top left.

## Gallery sizes

| size      | shape                  |
| --------- | ---------------------- |
| `small`   | short landscape strip  |
| `normal`  | square                 |
| `tall`    | portrait               |
| `wide`    | landscape (2 columns)  |
| `feature` | big square (2 columns) |

Tips:
- Two `small` pieces stacked are exactly as tall as one `tall` piece.
- Gaps usually mean a column has an odd number of rows. Move a piece or change a size.
- Use `fit: 'contain'` to show a whole piece without cropping. Add `tileColor` for the background.
- Use `focus: 'top'` (or `bottom`, `left`, `right`) to choose which part stays visible when a tile crops.
- On phones every piece is shown full width at its own shape.

## Other things to edit

| What                              | Where                          |
| --------------------------------- | ------------------------------ |
| About text, tools, clients, links | `src/data/profile.ts`          |
| Menu items                        | `src/data/navigation.ts`       |
| Colors and fonts                  | `src/style.css` (`@theme`)     |
| Logo and portrait                 | `public/images/brand/`         |

## Replace the placeholders

The images in `public/images/` were cropped from the design mockups.
Swap in your own files:

- `brand/logo.png` and `brand/logo-light.png` (the light one is for the crimson phone menu). SVG works too, just update the file names in `src/components/layout/SiteLogo.vue`.
- `brand/portrait.png`
- everything in `work/`

The display font (your name on the About page) is Amarante, which is close but not the same as your logo lettering.
To use your own font, add the file to `public/fonts/`, declare it with `@font-face` in `src/style.css`, and change `--font-display`.

## Project map

```
src/
  data/          ← the files you edit
  types/         what each piece of data looks like
  router/        the pages and their links
  views/         one file per page
  composables/   shared logic (filtering, active menu item, page title)
  components/
    layout/      sidebar, phone header, phone menu, nav links
    gallery/     the grid and each tile
    project/     title, details, process images, previous/next
    about/       tools and clients
    ui/          back link, contact button, empty state
```

## Deploying

`npm run build` creates `dist/`. Upload it to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
Because the site uses real page links, set the host to send every URL to `index.html`
(on Netlify add a `_redirects` file containing `/* /index.html 200`).
If the site lives in a sub-folder, set `base` in `vite.config.ts`.
