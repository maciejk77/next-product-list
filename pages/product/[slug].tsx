import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Loader from '../components/Loader';
import { PRODUCT_QUERY } from './queries';
import Layout from '../components/Layout';
import Rating from '../components/Rating/index';
import Image from 'next/image';
import { FlexRow } from '../styles';
import { ScrollContainer } from '../styles';

const Product = () => {
  const { query, back } = useRouter();
  const { data, loading } = useQuery(PRODUCT_QUERY, {
    variables: { slug: query['slug'] },
  });

  if (loading) return <Loader />;

  const { name, rating, seoDescription, description, thumbnail, pricing } =
    data.product;

  const { currency, amount } = pricing?.priceRange?.stop?.gross;
  const formattedAmount = amount.toFixed(2);
  const isPound = currency === 'GBP';

  const content = JSON.parse(description)?.blocks.map(
    ({ data }: { data: { text: string } }) => data
  );

  return (
    <Layout
      main={
        <ScrollContainer>
          <div
            onClick={() => back()}
            style={{
              padding: 5,
            }}
          >
            &#8678; back
          </div>
          <div
            style={{
              // border: '1px solid red',
              margin: '10px 30px 30px',
            }}
          >
            <FlexRow>
              <Image
                src={thumbnail.url}
                width={300}
                height={300}
                alt=""
                // style={{ border: '1px solid green' }}
              />

              <div
                style={{
                  // border: '1px dotted blue',
                  width: '100%',
                  padding: '10px 20px',
                }}
              >
                <h1>{name}</h1>
                <div style={{ marginBottom: 10 }}>{seoDescription}</div>

                <FlexRow>
                  <Rating rating={rating} />
                  <div>&nbsp;({rating ? rating.toFixed(1) : 0})</div>
                </FlexRow>

                <div style={{ fontWeight: 'bold', padding: '5px 0' }}>
                  {isPound
                    ? `£${formattedAmount}`
                    : `${formattedAmount} ${currency}`}
                </div>
              </div>
            </FlexRow>

            <div>
              {content?.map(({ text }: { text: string }, index: number) => (
                <div
                  style={{
                    // border: '1px solid black',
                    marginBottom: 20,
                    padding: 10,
                  }}
                  key={`${text}=${index}`}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </div>
        </ScrollContainer>
      }
    />
  );
};

export default Product;
