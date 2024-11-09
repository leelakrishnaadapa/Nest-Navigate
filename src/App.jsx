/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react';
//import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Layout } from './layout';
import { theme } from './theme';
import ErrorBoundary from './ErrorBoundary';
function App() {
  return (
    <ErrorBoundary>
            {true ? <Layout /> : 'Please get Access'}
    </ErrorBoundary>

  );
}

export default App;
