import '@testing-library/jest-dom';
import 'intersection-observer';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { PRODUCTS_QUERY } from './queries';
import { mockProductsData } from '@/components/Products/mockData';
import Products from './index';

const mocks = [
  {
    request: {
      query: PRODUCTS_QUERY,
      variables: {
        after: null,
      },
    },
    result: mockProductsData,
  },
];

describe('<Products />', () => {
  it('renders product list without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Products />
      </MockedProvider>
    );

    expect(
      await screen.findAllByRole('heading', { name: /1000 Kisses Deep/ })
    ).toHaveLength(2);
  });
});
