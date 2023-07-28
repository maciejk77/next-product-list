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

// export interface Thumbnail {
//   alt: string;
//   url: string;
// }

// export interface Gros {
//   currency: string;
//   amount: number;
// }

// export interface Stop {
//   gross: {
//     currency: string;
//     amount: number;
//   };
// }

// export interface PriceRange {
//   stop: {
//     gross: {
//       currency: string;
//       amount: number;
//     };
//   };
// }

// export interface Pricing {
//   priceRange: {
//     stop: {
//       gross: {
//         currency: string;
//         amount: number;
//       };
//     };
//   };
// }

// export interface PageInfo {
//   endCursor: string;
//   hasNextPage: boolean;
// }

// export interface Data {
//   products: Product;
// }

// export interface Cost {
//   requestedQueryCost: number;
//   maximumAvailable: number;
// }

// export interface Extension {
//   cost: {
//     requestedQueryCost: number;
//     maximumAvailable: number;
//   };
// }
