import ProductItem from "./ProductItem";

const ProductList = ({ productData }) => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", width: "100%", }}>
        {productData?.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
