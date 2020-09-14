# Migrating an existing React App to TypeScript

**Recourse**
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/migration/intro/)
- [TypeScript React Conversion Guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide) - by Microsoft
- [typescript-cheetsheets/react](https://github.com/typescript-cheatsheets/react)

- [react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide#redux---typing-patterns)

## Step 1 Adding TypeScript
- For `Create React App` (higher than 2.1.0), add
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

or

yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
see official guide [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- For [React + TypeScript + Webpack + Babel](https://github.com/basarat/typescript-react/tree/master/01%20bootstrap)

## Step 2 Redux Ecosystem
- [Redux official guide](https://redux.js.org/recipes/usage-with-typescript/)
- Potential helper [typesafe-actions](https://www.npmjs.com/package/typesafe-actions#motivation)

## Step 3 Firebase
[create-react-app with Redux & TypeScript & Firebase Authentication [JavaScript]](https://blog.morizyun.com/javascript/typescript-tutorial-react-app-redux-firebase-authentication.html)