import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import { PRODUCT_QUERY } from './queries';
import Layout from '../components/Layout';
import Rating from '../components/Rating/index';
import Image from 'next/image';
import { FlexRow } from '../styles';
import { ScrollContainer } from '../styles';
import {
  CurrencyWrapper,
  DescriptionWrapper,
  NameWrapper,
  RatingWrapper,
} from '../components/ProductListItem/styles';
import {
  ContentItemWrapper,
  ImageWrapper,
  TextWrapper,
  CardWrapper,
  TopImageWrapper,
  StyledBackIcon,
} from './styles';

const Product = () => {
  const { query, back } = useRouter();
  const { data, loading } = useQuery(PRODUCT_QUERY, {
    variables: { slug: query['slug'] },
  });

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

  const DEFAULT_BACKGROUND_IMAGE_URL =
    'https://unicorn-staging.eu.saleor.cloud/media/category-backgrounds/solid_perfume_hero_2_2019_1.jpg';

  const DEFAULT_IMAGE_URL = '/lush-logo-flowers.jpeg';
  const DEFAULT_ALT = 'Lush Product Image';

  const { currency, amount } = pricing?.priceRange?.stop?.gross;
  const formattedAmount = amount.toFixed(2);
  const isPound = currency === 'GBP';
  const formattedRating = <>&nbsp;({rating ? rating.toFixed(1) : 0})</>;
  const formattedAmountCurrency = isPound
    ? `£${formattedAmount}`
    : `${formattedAmount} ${currency}`;

  const content = JSON.parse(description)?.blocks.map(
    ({ data }: { data: { text: string } }) => data
  );

  return (
    <Layout
      main={
        <ScrollContainer>
          <TopImageWrapper>
            <Image
              src={
                category?.backgroundImage?.url || DEFAULT_BACKGROUND_IMAGE_URL
              }
              alt={category?.backgroundImage?.alt || DEFAULT_ALT}
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </TopImageWrapper>

          <StyledBackIcon onClick={() => back()}>&#8678;</StyledBackIcon>

          <CardWrapper>
            <FlexRow>
              <ImageWrapper>
                <Image
                  src={thumbnail?.url || DEFAULT_IMAGE_URL}
                  width={300}
                  height={300}
                  alt={thumbnail?.alt || DEFAULT_ALT}
                />
              </ImageWrapper>

              <TextWrapper>
                <NameWrapper>
                  <h1>{name}</h1>
                </NameWrapper>

                <DescriptionWrapper>{seoDescription}</DescriptionWrapper>

                <RatingWrapper>
                  <Rating rating={rating} />
                  {formattedRating}
                </RatingWrapper>

                <CurrencyWrapper>{formattedAmountCurrency}</CurrencyWrapper>
              </TextWrapper>
            </FlexRow>

            <>
              {content?.map(({ text }: { text: string }, index: number) => (
                <ContentItemWrapper
                  key={`${text}=${index}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </>
          </CardWrapper>
        </ScrollContainer>
      }
    />
  );
};

export default Product;
