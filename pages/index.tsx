import Head from 'next/head';
import Image from 'next/image';
import Products from './components/Products';
import { HomeContainer } from './styles';
import { MainContainer } from './components/Main/styles';

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>The Product List</title>
        <meta name="description" content="Next Product List" />
      </Head>

      <header
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'flex-start',
          padding: '20px 20px 20px 50px',
        }}
      >
        <Image
          src={'/lush_logo_black.webp'}
          height={50}
          width={50 * 3.45}
          alt="Lush Logo"
        />
      </header>

      <MainContainer>
        <Products />
      </MainContainer>
    </HomeContainer>
  );
}
