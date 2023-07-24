import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';
import Rating from '../Rating';
import { INode } from '../../../interfaces';

const ProductListItem = forwardRef(({ item }: { item: INode }, ref: any) => {
  const { id, name, slug, thumbnail, rating, seoDescription, pricing } = item;

  const DEFAULT_IMAGE_URL = '/lush-logo-flowers.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';
  const DEFAULT_TEXT = 'Find out more about this product';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;
  const formattedAmount = amount.toFixed(2);
  const isPound = currency === 'GBP';

  return (
    <Link href={`/product/${slug}`}>
      <div
        style={{
          width: 290,
          margin: 20,
        }}
        ref={ref}
      >
        <Image
          src={thumbnail?.url || DEFAULT_IMAGE_URL}
          width={200}
          height={200}
          alt={thumbnail?.alt || DEFAULT_ALT}
          style={{
            display: 'flex',

            borderRadius: 100,
            position: 'relative',
            top: 90,
            margin: 'auto',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            backgroundColor: 'lightgray',
            padding: 15,
            borderRadius: 15,
            // paddingTop: 60,
            minHeight: 240,
          }}
        >
          <div
            style={{ fontSize: 20, fontWeight: 'bolder', padding: '10px 0' }}
          >
            {name}
          </div>
          <div style={{ display: 'flex', padding: '5px 0' }}>
            <Rating rating={rating} />
            <div>&nbsp;({rating ? rating.toFixed(1) : 0})</div>
          </div>

          <div
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {seoDescription ? seoDescription : DEFAULT_TEXT}
          </div>
          <div style={{ fontWeight: 'bold', padding: '5px 0' }}>
            {isPound ? `£${formattedAmount}` : `${formattedAmount} ${currency}`}
          </div>
        </div>
      </div>
    </Link>
  );
});

export default ProductListItem;
