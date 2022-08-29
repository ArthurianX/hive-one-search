import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;

function HiveOneApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default HiveOneApp;
