# mcaddon.dev

Documentation for Minecraft Marketplace add-on integrations, including script events, compatibility tags, examples, and quick references for supported add-ons.

## Development

Install dependencies:

```sh
npm install
```

Start the VitePress dev server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the built site:

```sh
npm run preview
```

## Quality Checks

Run linting:

```sh
npm run lint
```

Validate docs structure, placeholder copy, and local links:

```sh
npm run check:docs
```

## Project Structure

- `docs/` - VitePress content and public assets.
- `docs/.vitepress/config.mts` - site config, head tags, search, nav, and theme options.
- `docs/.vitepress/addons.ts` - shared add-on metadata used by navigation and custom components.
- `docs/.vitepress/sidebar.ts` - generated sidebar loader for `sidebar.json` files.
- `docs/.vitepress/theme/` - custom theme components and CSS.
- `scripts/validate-docs.mjs` - docs validation script.

## Adding or Updating an Add-on

1. Add or update the add-on entry in `docs/.vitepress/addons.ts`.
2. Add the docs pages under `docs/<addon-route>/`.
3. Add a `sidebar.json` file for that add-on section.
4. Add images or icons under `docs/public/` when needed.
5. Run `npm run check:docs`, `npm run lint`, and `npm run build`.

## Disclaimer

This site is not associated with or approved by Mojang Studios or Microsoft.
