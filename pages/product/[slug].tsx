import React from 'react';
import { createApolloClient } from '../../apollo';
import { useRouter } from 'next/router';
import Loader from '../../components/Loader';
import { PRODUCT_QUERY } from './queries';
import Layout from '../../components/Layout';
import Rating from '../../components/Rating/index';
import Image from 'next/image';
import { IProduct } from '../../interfaces';
import { formattedAmount, formattedRating } from '../../helpers';
import {
  CurrencyWrapper,
  DescriptionWrapper,
  NameWrapper,
  RatingWrapper,
} from '../../components/ProductItem/styles';
import {
  ContentItemWrapper,
  ImageWrapper,
  TextWrapper,
  CardWrapper,
  TopImageWrapper,
  StyledBackIcon,
  ContentWrapper,
  HeaderWrapper,
} from './styles';

const Product = ({ data, loading }: { data: IProduct; loading: boolean }) => {
  const { back } = useRouter();

  if (loading) return <Loader />;

  const {
    name,
    rating,
    seoDescription,
    description,
    thumbnail,
    pricing,
    category,
  } = data.product;

  const DEFAULT_BACKGROUND_IMAGE_URL = '/solid_perfume_hero.jpg';
  const DEFAULT_IMAGE_URL = '/lush-logo-flowers.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;

  const content = JSON.parse(description)?.blocks.map(
    ({ data }: { data: { text: string } }) => data
  );

  return (
    <Layout
      main={
        <>
          <TopImageWrapper>
            <Image
              src={
                category?.backgroundImage?.url || DEFAULT_BACKGROUND_IMAGE_URL
              }
              alt={category?.backgroundImage?.alt || DEFAULT_ALT}
              height={300}
              width={300}
              sizes="100vw"
              style={{
                width: '100vw',
                height: 'auto',
                color: 'black',
                borderBottom: '2px dashed',
              }}
            />
          </TopImageWrapper>

          <StyledBackIcon onClick={() => back()}>&#8678;</StyledBackIcon>

          <CardWrapper>
            <HeaderWrapper>
              <ImageWrapper>
                <Image
                  src={thumbnail?.url || DEFAULT_IMAGE_URL}
                  width={250}
                  height={250}
                  alt={thumbnail?.alt || DEFAULT_ALT}
                  style={{ borderRadius: 150, padding: 10 }}
                />
              </ImageWrapper>

              <TextWrapper>
                <NameWrapper productpage>{name}</NameWrapper>

                <DescriptionWrapper>{seoDescription}</DescriptionWrapper>

                <RatingWrapper>
                  <Rating rating={rating} />
                  {formattedRating(rating)}
                </RatingWrapper>

                <CurrencyWrapper productpage>
                  {formattedAmount(amount, currency)}
                </CurrencyWrapper>
              </TextWrapper>
            </HeaderWrapper>

            <ContentWrapper>
              {content?.map(({ text }: { text: string }, index: number) => (
                <ContentItemWrapper
                  key={`${text}=${index}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </ContentWrapper>
          </CardWrapper>
        </>
      }
    />
  );
};

export default Product;

export const getServerSideProps = async (context: {
  params: { slug: string };
}) => {
  const apolloClient = createApolloClient();
  const { data, loading } = await apolloClient.query({
    query: PRODUCT_QUERY,
    variables: { slug: context.params.slug },
  });

  return {
    props: { data, loading },
  };
};
