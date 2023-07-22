import Head from 'next/head';
import Products from './components/Products';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div style={{ border: '1px solid black', margin: 5 }}>
      <Head>
        <title>The Product List</title>
        <meta name="description" content="Next Product List" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Products</h2>
        <div
          style={{
            border: '1px solid red',
            padding: 5,
            height: '67vh',
            overflowY: 'scroll',
          }}
        >
          <Products />
        </div>
      </main>

      <footer className={styles.footer}>Footer here</footer>
    </div>
  );
}
