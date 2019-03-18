# Simpsons Quotes

Create an application that makes asynchronous API calls to display
Simpsons Quotes.

## Redux setup

* create `src/reducers/simpsons.js`
  * store a quote, characterName, and characterImage
* create `src/reducers/index.js`
  * use `combineReducer`
* create `src/store.js`
```js
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import { middleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,˜
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
```

## Fetch Simpsons quotes

Use the [Simpsons Quotes API](https://thesimpsonsquoteapi.glitch.me)

* create `src/services/simpsonsApi.js`
  * create a `getQuote` function that fetches a simpson quote
* create `src/action/simpsons.js`
  * create a `fetchQuote` actionCreator
  * use the promise middleware to fetch from the simpsonsApi
* update the `src/reducers/simpsons.js` reducer to handle your action

## Display Quote

* create a `src/components/quote/Quote.js`
  * display a quote, characterName, and characterImage
* create a `src/containers/facts/SimpsonsQuote.js`
  * create a class `SimpsonsQuote` that takes `quote`, `characterName`,
    `characterImage` and `fetch` props
  * on `componentDidMount` call the `fetch` function
  * `render` the `Quote` component
  * connect `SimpsonsQuote` to redux
    * mapStateToProps passes facts
      * create a `src/selectors/simpsons.js` with a `getQuote`, `getCharacterName`,
        `getCharacterImage` selector
    * mapDispatchToProps passes fetch
      * fetch dispatches the `fetchQuote` action
* Add `SimpsonsQuote` to your `App.js` file

## Add button to fetch another quote

* create a `src/components/quote/Load.js
  * display a button
* add the `Load` component to `SimpsonsQuote`
  * pass `fetch` to the `Load` component

## Refactor

* Show a loading screen while waiting
  * add loading to your redux state
* Create a `withFetch` higher order component

## Deploy

* Deploy your app to netlify
