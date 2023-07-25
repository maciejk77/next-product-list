import Head from 'next/head';
import Products from './components/Products';
import { HomeContainer } from './styles';
import { ScrollContainer } from './styles';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout
      main={
        <HomeContainer>
          <Head>
            <title>The Product List</title>
            <meta name="description" content="Next Product List" />
          </Head>

          <ScrollContainer>
            <Products />
          </ScrollContainer>
        </HomeContainer>
      }
    />
  );
}
