import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/square-peg'
import '@fontsource-variable/rubik';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const  fonts = {
  heading: `'Square Peg', sans-serif`,
  body: `'Montserrat', sans-serif`
}

const theme = extendTheme({ fonts })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);