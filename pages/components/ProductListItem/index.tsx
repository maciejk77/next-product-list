const ProductListItem = ({ item }: { item: any }) => {
  const { id, name } = item;

  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default ProductListItem;
