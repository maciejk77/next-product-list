import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import { PRODUCT_QUERY } from './gql';

const Product = () => {
  const { query, back } = useRouter();
  const { data, loading } = useQuery(PRODUCT_QUERY, {
    variables: { id: query['productId'] },
  });

  if (loading) return <Loader />;

  const { id, name } = data.product;

  return (
    <div>
      <button onClick={() => back()}>&lt;&lt; back</button>
      <h1>Product</h1>
      <div>ID: {id}</div>
      <div>NAME: {name}</div>
    </div>
  );
};

export default Product;
