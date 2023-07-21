import { useQuery } from '@apollo/client';
import ProductList from '../ProductList';
import Loader from '../Loader';
import { PRODUCTS_QUERY } from './gql';

const Products = () => {
  const { data, loading, fetchMore } = useQuery(PRODUCTS_QUERY, {
    variables: { after: null },
  });

  if (loading) return <Loader />;

  const items = data.products.edges.map((edge: any) => edge.node);
  const { hasNextPage, endCursor } = data.products.pageInfo;

  const handleMoreDataRequest = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (hasNextPage) {
          fetchMoreResult.products.edges = [
            ...prevResult.products.edges,
            ...fetchMoreResult.products.edges,
          ];
          return fetchMoreResult;
        }
      },
    });
  };

  return (
    <>
      <ProductList items={items} />
      <button onClick={handleMoreDataRequest}>More Items</button>
    </>
  );
};

export default Products;
