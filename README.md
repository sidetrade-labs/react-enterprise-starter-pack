# Complete React - Redux - Typescript stack

This repository is all you need to get started on a full-featured React app with Typescript. If you have a need for a solid Front-end stack to use on an entreprise level, this is a good place to start 👍.

Read about how we created this stack and why we picked these libraries here: https://medium.com/@sidetrade_labs/modern-2020-react-stack-or-how-we-switched-away-from-angular-a9efb65d51e5

### It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses:

[Typescript](https://github.com/microsoft/TypeScript) because it's 2020  
[React Router](https://github.com/ReactTraining/react-router) to handle client side routing  
[Redux](https://github.com/reduxjs/react-redux) to handle State Management, with [Redux-saga](https://github.com/redux-saga/redux-saga) for async actions  
[Ant Design](https://github.com/ant-design/ant-design) for its very complete set of components  
[Styled Components](https://github.com/styled-components/styled-components) to extend Ant's default component styling  
[TailwindCSS](https://github.com/tailwindcss/tailwindcss) to elegantly handle the rest of your app's UI  
[React Hook Form](https://github.com/react-hook-form/react-hook-form) because forms shouldn't be a pain  
[LinguiJS](https://github.com/lingui/js-lingui) because that's the best all-in-one i18n solution that we found

### And also:

[Axios](https://github.com/axios/axios) as a proper Http client  
[Cypress](https://github.com/cypress-io/cypress) for E2E testing  
[Prettier](https://github.com/prettier/prettier) because it's just too helpful

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
You will also see any lint errors in the console.

### `npm cypress:open`

Opens the cypress test runner in a new window
You will also see any lint errors in the console.

### `npm cypress:run`

Runs the cypress tests

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Runs the cypress tests

### `npm run analyse`

Will analyse your javascript bundle size, if you've run a full build before.

### `npm run i18n:add`

Adds a new locale to your application.<br />
Right now it supports english and french.
Will analyse your javascript bundle size, if you've run a full build before.

### `npm run i18n:extract`

Extract the strings that need to be translated to all the translation files.

### `npm run i18n:compile`

Once you've translated your application, run this to expose the final dictionnaries that will get injected to your app.<br />
Automatically run when starting the app.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Feel free to open an issue on this repo if you think something can be improved!

Happy hacking 🎉
