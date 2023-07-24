import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';

const ProductListItem = forwardRef(({ item }: any, ref: any) => {
  const { id, name, slug, thumbnail, rating, seoDescription, pricing } = item;

  const DEFAULT_IMAGE_URL = '/lush-logo.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;
  const formattedAmount = amount.toFixed(2);
  const isPound = currency === 'GBP';

  return (
    <Link href={`/product/${slug}`}>
      <div
        style={{
          border: '1px solid black',
          padding: 10,
          width: 290,
          margin: 5,
        }}
        ref={ref}
      >
        <div>{name}</div>
        <Image
          src={thumbnail?.url || DEFAULT_IMAGE_URL}
          width={200}
          height={200}
          alt={thumbnail?.alt || DEFAULT_ALT}
        />
        <div>{rating ? rating.toFixed(1) : 0}</div>
        <div>{seoDescription}</div>
        <div>
          {isPound ? `£${formattedAmount}` : `${formattedAmount} ${currency}`}
        </div>
      </div>
    </Link>
  );
});

export default ProductListItem;
