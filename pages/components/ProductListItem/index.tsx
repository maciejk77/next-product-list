import Link from 'next/link';

const ProductListItem = ({ item }: { item: any }) => {
  const { id, name, slug } = item;

  return (
    <Link href={`/product/${slug}`}>
      <div
        style={{
          border: '1px solid black',
          padding: 10,
          width: 300,
          marginBottom: 5,
        }}
      >
        {name}
      </div>
    </Link>
  );
};

export default ProductListItem;
