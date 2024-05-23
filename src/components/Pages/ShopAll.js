import { useContext } from "react";
import ProductContext from "../../store/product-context";
import ProductsWithPagination from "../Layouts/Home/ProductsWithPagination";

const ShopAll = () => {
  const { productData } = useContext(ProductContext);

  return (
    <>
      <ProductsWithPagination productData={productData} />
    </>
  );
};

export default ShopAll;
