// import { useRef, useCallback, useState, useEffect } from 'react';
// import ProductListItem from '../ProductListItem/index';

// const ProductList = ({
//   items,
//   hasNextPage,
//   handleMoreData,
// }: {
//   items: any;
//   loading: boolean;
//   hasNextPage: boolean;
//   handleMoreData: () => void;
// }) => {
//   const observer = useRef<any>();

//   const lastItem = useCallback(
//     (node: any) => {
//       if (observer.current) observer.current;
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasNextPage) {
//           handleMoreData();
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [hasNextPage]
//   );

//   return (
//     <div>
//       {items.map((item: any, index: number) => {
//         const isLastItem = items.length === index + 1;
//         if (isLastItem) {
//           return (
//             <ProductListItem
//               ref={lastItem}
//               key={`${item.id}-${index}`}
//               item={item}
//             />
//           );
//         } else {
//           return <ProductListItem key={`${item.id}-${index}`} item={item} />;
//         }
//       })}
//     </div>
//   );
// };

// export default ProductList;
