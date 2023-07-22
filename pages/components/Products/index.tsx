import { useQuery } from '@apollo/client';
import Loader from '../Loader';
import { PRODUCTS_QUERY } from './gql';
import {
  useRef,
  useCallback,
  // useState,
  // useEffect
} from 'react';
import ProductListItem from '../ProductListItem/index';

const Products = () => {
  const { data, loading, fetchMore } = useQuery(PRODUCTS_QUERY, {
    variables: { after: null },
  });

  if (loading) return <Loader />;

  const items = data.products.edges.map((edge: any) => edge.node);
  const { hasNextPage, endCursor } = data.products.pageInfo;

  const handleMoreData = () => {
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

  const ProductList = ({
    items,
    hasNextPage,
    handleMoreData,
  }: {
    items: any;
    loading: boolean;
    hasNextPage: boolean;
    handleMoreData: () => void;
  }) => {
    const observer = useRef<any>();

    const lastItem = useCallback(
      (node: any) => {
        if (observer.current) observer.current;
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            handleMoreData();
          }
        });
        if (node) observer.current.observe(node);
      },
      [hasNextPage]
    );

    return (
      <div>
        {items.map((item: any, index: number) => {
          const isLastItem = items.length === index + 1;
          if (isLastItem) {
            return (
              <ProductListItem
                ref={lastItem}
                key={`${item.id}-${index}`}
                item={item}
              />
            );
          } else {
            return <ProductListItem key={`${item.id}-${index}`} item={item} />;
          }
        })}
      </div>
    );
  };

  return (
    <ProductList
      items={items}
      loading={loading}
      hasNextPage={hasNextPage}
      handleMoreData={handleMoreData}
    />
  );
};

export default Products;
