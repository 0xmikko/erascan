/*
 * Erascan - erasure protocol explorer
 * https://github.com/MikaelLazarev/erascan
 *
 * Copyright (c) 2019. Mikael Lazarev
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './App.css'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import configureStore from './store/configureStore'

const history = createBrowserHistory()
const store = configureStore(history)

if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
  throw new Error('REACT_APP_GRAPHQL_ENDPOINT environment variable not defined')
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
