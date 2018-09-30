# SimpleYo Web Client
Monorepo that contains SimpleYo web components.

This repository is managed by [Lerna](https://github.com/lerna/lerna), and includes the following packages:
- [syw-uikit](https://github.com/simpleryo/web-components/tree/master/packages/syw-uikit): React components based on [Ant Design](https://ant.design/).
- [syw-form](https://github.com/simpleryo/web-components/tree/master/packages/syw-form): React components used for handling application form, which is based on syw-uikit.
- [syw-utils](https://github.com/simpleryo/web-components/tree/master/packages/syw-utils): Util functions for both web and server.

---
## Getting started
### Setup
1. Clone the project from Git repo.
2. Make sure you have `node` and `yarn` installed.
  - Install `nvm` (Node Version Manager) [Detail about the installation](https://github.com/creationix/nvm#installation). Check out the boron LTS(Long-term Support) of Node.js by following scripts
  ```
  nvm install --lts=boron
  nvm use --lts=boron
  ```
  - Install `yarn` as dependency management tool. [Detail about the installation](https://yarnpkg.com/en/docs/install)
  ```
  brew install yarn --ignore-dependencies
  ```
3. Switch to top level directory.
4. Run `yarn link-packages` (bootstrap command, link local projects and download any external npm dependencies. Runs npm install on the top level package as a pre-step).

---
## Development Mode:

### Run syw-uikit in local dev mode
Dev mode enables [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware), will cause `Webpack` to compile files in-memory - code changes are saved and updated when refreshing page in browser.

1. Switch to top level directory.
2. `yarn start:dev --scope @simpleryo/syw-uikit` to start web server.
3. Go to browser and hit http://localhost:3000/ to launch.

#### Static Analysis (Eslint)

Run `yarn lint` to do the lint check.

---
## Production Mode:

### Run syw-uikit in local prod mode
1. Switch to top level directory.
2. Run `yarn build` (*to build all sub server packages - required pre-step*)
3. Run `yarn start --scope @simpleryo/syw-uikit` to start web server in prod mode.
