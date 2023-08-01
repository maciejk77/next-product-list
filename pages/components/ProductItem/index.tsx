import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { forwardRef } from 'react';
import Rating from '../Rating';
import { INode } from '../../../interfaces';
import { formattedAmount, formattedRating } from '../../../helpers';
import {
  Card,
  ContentWrapper,
  ImageWrapper,
  NameWrapper,
  RatingWrapper,
  DescriptionWrapper,
  CurrencyWrapper,
  FlexEnd,
} from './styles';

interface IProps {
  item: INode;
}

const ProductItem = forwardRef((props: IProps, ref: any) => {
  const { name, slug, thumbnail, rating, seoDescription, pricing } = props.item;

  const DEFAULT_IMAGE_URL = '/lush-logo-flowers.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';
  const DEFAULT_TEXT = 'Find out more about this product';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;

  return (
    <Link href={`/product/${slug}`}>
      <Card ref={ref}>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              src={thumbnail?.url || DEFAULT_IMAGE_URL}
              width={170}
              height={170}
              alt={thumbnail?.alt || DEFAULT_ALT}
              style={{ borderRadius: '100px' }}
            />
          </ImageWrapper>

          <NameWrapper>{name}</NameWrapper>

          <RatingWrapper>
            <Rating rating={rating} />
            <div>{formattedRating(rating)}</div>
          </RatingWrapper>

          <DescriptionWrapper>
            {seoDescription ? seoDescription : DEFAULT_TEXT}
          </DescriptionWrapper>

          <FlexEnd>
            <CurrencyWrapper>
              {formattedAmount(amount, currency)}
            </CurrencyWrapper>
          </FlexEnd>
        </ContentWrapper>
      </Card>
    </Link>
  );
});

export default ProductItem;
