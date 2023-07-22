import Link from 'next/link';
import { forwardRef } from 'react';

const ProductListItem = forwardRef(({ item }: any, ref: any) => {
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
        ref={ref}
      >
        {name}
      </div>
    </Link>
  );
});

export default ProductListItem;
