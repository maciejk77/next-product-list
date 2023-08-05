import '@testing-library/jest-dom';
import 'intersection-observer';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { PRODUCT_QUERY } from './queries';
import { mockProductData } from './mockData';
import Product from './[slug]';

const mocks = [
  {
    request: {
      query: PRODUCT_QUERY,
      variables: {
        slug: '17-cherry-tree-lane',
      },
    },
    result: mockProductData,
  },
];

// To be fixed, skipped atm
describe('<Product />', () => {
  it.skip('renders product for given slug', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Product data={undefined} loading={false} />
      </MockedProvider>
    );

    expect(await screen.findByText(/17-cherry-tree-lane/)).toBeInTheDocument();
  });
});
