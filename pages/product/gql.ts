import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID, $slug: String) {
    product(id: $id, slug: $slug, channel: "uk") {
      id
      name
      slug
    }
  }
`;
