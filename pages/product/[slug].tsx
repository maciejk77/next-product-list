import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import { PRODUCT_QUERY } from './queries';

const Product = () => {
  const { query, back } = useRouter();
  const { data, loading } = useQuery(PRODUCT_QUERY, {
    variables: { slug: query['slug'] },
  });

  if (loading) return <Loader />;

  const { id, name, slug } = data.product;

  return (
    <div>
      <button onClick={() => back()}>&lt;&lt; back</button>
      <h1>Product</h1>
      <div>ID: {id}</div>
      <div>NAME: {name}</div>
      <div>SLUG: {slug}</div>
    </div>
  );
};

export default Product;
