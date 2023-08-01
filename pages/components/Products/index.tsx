import { useQuery } from '@apollo/client';
import Loader from '../Loader';
import { PRODUCTS_QUERY } from './queries';
import { useRef, useCallback, FunctionComponent } from 'react';
import ProductItem from '../ProductItem/index';
import { INode } from '../../../interfaces';
import { FlexWrap } from './styles';
// import { createApolloClient } from '../../../apollo';

interface IProductList {
  items: INode[];
  hasNextPage: boolean;
  handleMoreData: () => void;
}

const Products: FunctionComponent = () => {
  const { data, loading, fetchMore } = useQuery(PRODUCTS_QUERY, {
    variables: { after: null },
  });

  if (loading) return <Loader />;

  const items = data.products.edges.map((edge: { node: INode }) => edge.node);
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

  const ProductList: FunctionComponent<IProductList> = ({
    items,
    hasNextPage,
    handleMoreData,
  }) => {
    const observer = useRef<IntersectionObserver | undefined>();

    const lastItem = useCallback(
      (node: Element) => {
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
      <FlexWrap>
        {items.map((item: INode, index: number) => {
          const isLastItem = items.length === index + 1;
          if (isLastItem) {
            return (
              <ProductItem
                ref={lastItem}
                key={`${item.id}-${index}`}
                item={item}
              />
            );
          } else {
            return <ProductItem key={`${item.id}-${index}`} item={item} />;
          }
        })}
      </FlexWrap>
    );
  };

  return (
    <ProductList
      items={items}
      hasNextPage={hasNextPage}
      handleMoreData={handleMoreData}
    />
  );
};

export default Products;

// SSR not successful, error below to be resolved
// Property 'fetchMore' does not exist on type 'ApolloQueryResult<any>'

// export const getServerSideProps = async () => {
//   const apolloClient = createApolloClient();
//   const { data, loading, fetchMore } = await apolloClient.query({
//     query: PRODUCTS_QUERY,
//     variables: { after: null },
//   });

//   return {
//     props: { data, loading, fetchMore },
//   };
// };
