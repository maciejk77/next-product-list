import ProductListItem from '../ProductListItem/index';

const ProductList = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <ProductListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ProductList;
