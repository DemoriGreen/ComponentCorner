# ComponentCorner

A responsive tech storefront built with React and Vite. The app includes product cards, an add-to-cart flow, and cart persistence with localStorage.

## Run locally

```bash
npm install
npm run dev
```

## Run the test suite

```bash
npm test
```

Run tests once without watch mode:

```bash
npm run test:run
```

The test suite covers HomePage rendering, ProductCard content and add-to-cart interaction, CartItem rendering and removal, and App cart state/localStorage persistence.

## Build for production

```bash
npm run build
```

Vercel build settings: Framework Preset **Vite**, Build Command **npm run build**, Output Directory **dist**.

## Deployment

Import this GitHub repository in Vercel and deploy. Vercel will build the production app from the `main` branch.


The component styling was created with assistance from ChatGPT (OpenAI) and customized for this project.
