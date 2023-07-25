import { useQuery } from '@apollo/client';
import Loader from '../Loader';
import { PRODUCTS_QUERY } from './queries';
import { useRef, useCallback, FunctionComponent } from 'react';
import ProductListItem from '../ProductListItem/index';
import { INode } from '../../../interfaces';
import { FlexWrap } from './styles';

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
