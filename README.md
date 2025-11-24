# NamasteReact — YouTube-style UI (Vite + React)

Live demo: https://youtube-clone-app-one.vercel.app/

Short description

- NamasteReact — A Vite + React learning project implementing a YouTube-style UI with reusable video and category components.

Author

- Harendra Sharma (PHANTOM)

Features

- Core UI: Header, menus, category bar, responsive video grid and video cards.
- Reusable React components demonstrating props, state, and composition.
- Built with Vite for fast development.

Tech

- React + JSX
- Vite
- Tailwind CSS (utilities used throughout components)

Tech stack (detailed)

- **React** — Functional components with hooks (`useState`, `useEffect`) for local UI state and lifecycle.
- **React Router** — Client-side routing for watch/video pages (`Link`, route-based navigation).
- **Vite** — Development server and bundler for fast HMR and optimized production builds.
- **Tailwind CSS** — Utility-first styling; used for layout, spacing, and responsive utilities (`aspect-video`, spacing, typography).
- **Fetch / YouTube Data API** — Uses `fetch` to call YouTube APIs (keys via `VITE_API_KEY`) for video lists and channel data.
- **React Icons** — Lightweight icon components used in UI (e.g., `react-icons/rx`, `react-icons/ci`).
- **Environment Variables** — `VITE_` prefixed vars for client-side config (keep secrets out of the repo).

Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry point
- `src/App.jsx` — main app component
- `src/components/` — UI components (`VideoCard.jsx`, `VideoSection.jsx`, `MenuBar.jsx`, etc.)
- `src/Utils/Constants.jsx` — API URLs and constants

Getting started (local development)

Prerequisites

- Node.js (LTS recommended)
- npm or yarn

Install

```bash
npm install
# or
yarn
```

Run development server

```bash
npm run dev
# or
yarn dev
```

Build for production

```bash
npm run build
# or
yarn build
```

Preview production build

```bash
npm run preview
# or
yarn preview
```

Environment & API keys

- Do NOT commit real API keys. This project uses environment variables (e.g. `VITE_API_KEY`) stored in a local `.env` file during development.
- Add `.env` to `.gitignore` and replace any committed keys with placeholders. If you accidentally pushed keys, rotate/revoke them.

Live deployment

- This project is deployed on Vercel: https://youtube-clone-app-one.vercel.app/

🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. Please:

- Fork the repository
- Create a feature branch (e.g., `feature/responsive-thumbnails`)
- Open a PR describing the change and include screenshots for visual updates

Made with ❤️ by Harendra Sharma

License

- Add a license (e.g., MIT) if you want to allow reuse. I can add a `LICENSE` file on request.

Contact

- Harendra Sharma (PHANTOM) — add your preferred contact or GitHub profile link here.
