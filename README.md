This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Specs of the project

This project has been built under nextJs because the several troubles find using react-router or react-router dom and expressJs

under the hood have Reac-query for the state managment and fetching, react context for local theme state hanlding,
styled-components to preprocesing the styles and give them super powers in theming making ease to sustain
and the only external dependency was the react-intersection-observer to handle the scrolling position (use vanilla intersection observer in react is a pain)

## Testing

this app counts with an wide coberture range on unit testing wtih jest and react-testing-library
additional has and integration and E2E testing suite with cypress

## Deploy

this has an pipeline direct from github to heroku
has been deployed on https://platzi-recipes.herokuapp.com/

# Now the instructions:

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://themealdb.com/api/json/v1/1](http://themealdb.com/api/json/v1/1). This endpoint can be edited in `pages/api/services.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

To run unit testing:

```bash
npm run test
# or
yarn test
```

Run the cypress suite:

```bash
npm run test:cypress
# or
yarn test:cypress
```

Is widely recomended generate an production build on local before run the cypress test suite

To run unit testing:

```bash
npm run build
# or
yarn build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
