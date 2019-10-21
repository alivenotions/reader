# Reader

A basic RSS reader for aggregating RSS feeds.

## Getting started

1. Install `yarn`
2. Run `yarn install`
3. For dev server, run `yarn start`
4. For production build, run `yarn build`

## Dependencies

These are the major dependencies in the project with the reasons for why they were chosen.

* [Typescript](https://github.com/microsoft/typescript): A superset of JS.
  * Provides type safety and aids in deciding the shape of the model before its implementation.
  * Helps in refactoring by providing a layer of unit-level type safety.
  * Is a joy to code in :)
* [React](https://github.com/facebook/react): Library for building the UI
  * Keeps the DSL minimal and gets out of your way (at least on a top-level abstraction) very quickly.
  * The UI library that I am most comfortable in right now and enjoy working in.
* [@testing-library/react](https://github.com/testing-library/react-testing-library): For testing various functionalities
  * Allows you to check use-cases very cleanly and easily.
* [TailwindCSS](https://github.com/tailwindcss/tailwindcss): Framework for managing and using CSS
  * Can create your own design system and then use it throughout the application via classnames.
  * Sort of like inline styles but optimized and centralized.
  * Can work with media queries on the same level with ease.
  * Experimenting with this library for the first time.
