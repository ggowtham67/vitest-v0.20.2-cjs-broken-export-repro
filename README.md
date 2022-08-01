# Reproduction

Vite v0.20.2 CJS import issue

## Setup

- Clone the repo
- Install the dependencies

```
npm install
```
- Run the tests

```
npm run test
```

Running the test should throw the following error

```bash
SyntaxError: Named export 'AttributeAction' not found. The requested module 'css-what' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'css-what';
const { AttributeAction, SelectorType } = pkg;
```
