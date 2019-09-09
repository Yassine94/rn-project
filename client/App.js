
import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://cd4d078d.ngrok.io',
});

const App = () => (
  <ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>
)

export default App;