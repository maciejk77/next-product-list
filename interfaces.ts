export interface INode {
  id: string;
  name: string;
  category: {
    backgroundImage: {
      alt: string;
      url: string;
    };
  };
  description: string;
  seoTitle: string;
  seoDescription: string;
  slug: string;
  rating: number;
  thumbnail: {
    alt: string;
    url: string;
  };
  pricing: {
    priceRange: {
      stop: {
        gross: {
          currency: string;
          amount: number;
        };
      };
    };
  };
}

export interface IProduct {
  product: INode;
}

export interface IEdge {
  node: INode;
  cursor: string;
}

export interface IProducts {
  edges: IEdge[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
  totalCount: number;
}

export interface IRoot {
  data: {
    products: IProducts;
  };
  extensions: {
    cost: {
      requestedQueryCost: number;
      maximumAvailable: number;
    };
  };
}
