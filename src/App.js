import React from 'react'
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import * as Keychain from 'react-native-keychain'
import AppNavigator from './AppNavigator'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext(async (req, { headers, ...context }) => {
  console.log('context', context)
  const tokens = await Keychain.getGenericPassword()
  console.log('tokensSetContext', tokens)
  const accessToken = tokens.username
  console.log('accessTokenSetContext', accessToken)
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : ''
    },
    ...context
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const App = () => {
  console.log('authLink', authLink)
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <AppNavigator />
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
