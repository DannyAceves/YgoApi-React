# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Dependencies ( extra components )

In the project directory, add bootstrap installing components or just posting url:

### `yarn add bootstrap` or post url


In the project directory, add Json server:

### `yarn add json-server --save-dev`


In the project directory, add axios:

### `yarn add axios`


In the project directory, add react-route-dom :

### `yarn add react-router-dom`


In the project directory, add react-pagitation :

### `yarn add react-pagination`



## Available Scripts


In the project directory, you can run:

### `yarn start` || `yarn dev`


IMPORTANT for we can charge the json db we need run the local server of the JSON, in the project directory, 
you can open other terminal an type run:

### `yarn server`

Runs the app in the development mode.\
Open [http://localhost:3000] || (http://localhost:5174) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

For run the local server with we own json we can change the package.json on var scripts
on server part change for :

### "server" : "json-server -p3001 or -p5174 --watch cardinfo.json"



### `yarn start` || `yarn dev`


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

