# NPM script commands to bring up application

1. npm install -- load npm 3rd party libraries.
2. npm run build -- hotfix loading.
3. npm start -- will host at localhost:3010.

# Webpack - Loading different Apps
1. Change the entry in webpack.config.common.js to use different app.
2. To learn more about how things work in WebPack Config see here - https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

## Webpack Terminology
1. entry - webpack will start from the parent component and see all other components.
2. sourcemap - connect to src tree to show readable code in console.
3. loader - test to filter out desired files to act on. 
4. resolve - Webpack doesnt know to resolve .jsx files implicitly. You can include .jsx in the extensions that webpack should resolve without explicit declaration.

    `resolve: { extensions: ['.js', '.jsx'] }`


# Linting - formating code
empty .prettierrc.json triggers prettier to execute

npx prettier --write .# react-hook-form
