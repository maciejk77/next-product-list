import ProductListItem from '../ProductListItem/index';

const ProductList = ({ items }: any) =>
  items.map((item: any) => <ProductListItem key={item.id} item={item} />);

export default ProductList;
