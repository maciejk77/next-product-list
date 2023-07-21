import Head from 'next/head';
import Products from './components/Products';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Product List</title>
        <meta name="description" content="Next Product List" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Products</h2>
        <Products />
      </main>

      <footer className={styles.footer}>Footer here</footer>
    </div>
  );
}
