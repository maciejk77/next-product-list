import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';
import Rating from '../Rating';
import { INode } from '../../../interfaces';
import {
  CurrencyWrapper,
  DescriptionWrapper,
  RatingWrapper,
  NameWrapper,
  CardWrapper,
  ImageWrapper,
  Container,
  SpacerTop,
} from './styles';

interface IProps {
  item: INode;
}

const ProductListItem = forwardRef((props: IProps, ref: any) => {
  const { name, slug, thumbnail, rating, seoDescription, pricing } = props.item;

  const DEFAULT_IMAGE_URL = '/lush-logo-flowers.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';
  const DEFAULT_TEXT = 'Find out more about this product';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;
  const formattedAmount = amount.toFixed(2);
  const isPound = currency === 'GBP';

  const formattedRating = <>&nbsp;({rating ? rating.toFixed(1) : 0})</>;
  const formattedAmountCurrency = isPound
    ? `£${formattedAmount}`
    : `${formattedAmount} ${currency}`;

  return (
    <Link href={`/product/${slug}`}>
      <Container ref={ref}>
        <ImageWrapper>
          <Image
            src={thumbnail?.url || DEFAULT_IMAGE_URL}
            width={175}
            height={175}
            alt={thumbnail?.alt || DEFAULT_ALT}
            style={{ borderRadius: 100 }}
          />
        </ImageWrapper>

        <CardWrapper>
          <SpacerTop />
          <NameWrapper>{name}</NameWrapper>

          <RatingWrapper>
            <Rating rating={rating} />
            {formattedRating}
          </RatingWrapper>

          <DescriptionWrapper>
            {seoDescription ? seoDescription : DEFAULT_TEXT}
          </DescriptionWrapper>

          <CurrencyWrapper>{formattedAmountCurrency}</CurrencyWrapper>
        </CardWrapper>
      </Container>
    </Link>
  );
});

export default ProductListItem;
