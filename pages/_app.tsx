import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo } from '../apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
