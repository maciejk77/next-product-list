import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID) {
    product(id: $id, channel: "uk") {
      id
      name
    }
  }
`;
