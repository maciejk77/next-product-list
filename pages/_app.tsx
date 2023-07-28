import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo } from '../apollo';
import { ApolloProvider } from '@apollo/client';
import { Lato } from 'next/font/google';

const fonts = Lato({
  weight: '400',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <main className={fonts.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}
export default MyApp;
