# HIC Transformed Life Church Dorm

A bilingual website for the HIC Transformed Life Church student dorm. Visitors can learn about the dorm, view photos, read about the weekly schedule and house rules, find application steps, and contact the dorm.

The site is built with Vue 3 and Vite. Its interface is available in English and Khmer.

## Requirements

- Node.js (LTS recommended)
- npm

## Getting started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |

## Features

- English and Khmer language switching, with the selected language saved in the browser.
- Dorm overview, photo gallery, video tour, news and events, room availability, schedule, facilities, house rules, FAQ, application information, and contact details.
- Photo viewer with previous/next navigation.
- Floating Telegram chat button and an embedded Google Map.
- Application form that prepares an email draft in the visitor's email app. It does not send or store form submissions.
- Responsive layout and accessibility features, including keyboard focus styles and a skip-to-content link.

## Updating the site

- **Page text and translations:** edit `src/locales/en.json` and `src/locales/km.json`. Keep the same translation keys in both files.
- **Weekly schedule, facilities, rules, and application steps:** edit the arrays in `src/data.js`. Their labels are translation keys defined in the locale files.
- **Photos:** add or replace `.jpg` files in `src/image/`. The gallery discovers these images automatically.
- **News and room availability:** add entries to `newsEvents` and `roomAvailability` in `src/data.js`. Add translated text keys to both locale files.
- **Video tour:** set `tourVideoUrl` in `src/data.js` to a video embed URL when the video is ready.
- **Contact details:** update the phone number, email address, Telegram link, or map coordinates in `src/components/Contact.vue`. The floating chat button link is in `src/components/ChatButton.vue`.
- **Application status:** status checks are not enabled yet; they need to be connected to a deployed Laravel API.
- **Colors, layout, and typography:** edit `src/style.css`.
- **Page sections and navigation:** `src/App.vue` assembles the page from the components in `src/components/`.

## Project structure

```text
src/
  components/   Vue components for the page sections
  image/        Dorm gallery photos
  locales/      English and Khmer translations
  App.vue       Page layout and navigation
  data.js       Schedule, facilities, rules, and application steps
  i18n.js       Language setup and preference persistence
  main.js       Vue application entry point
  style.css     Global styles
```

## Build and deployment

Create the production site:

```sh
npm run build
```

Deploy the contents of `dist/` to any static hosting provider, such as Netlify or Vercel. To test the built site locally, run `npm run preview`.
