import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ProductContext from "../../store/product-context";
import ProductsWithPagination from "../Layouts/Home/ProductsWithPagination";

const Shop = () => {
  const [shopResults, setShopResults] = useState([]);
  const location = useLocation();
  const { value } = location.state;
  const { category } = useParams();

  const { productData } = useContext(ProductContext);

  useEffect(() => {
    filterProducts();
  }, [productData, category, value]);

  const filterProducts = () => {
    if (productData && category && value) {
      const filteredProducts = productData?.filter(
        (product) => product[value].toLowerCase() === category.toLowerCase()
      );
      setShopResults(filteredProducts);
    }
  };

  console.log(shopResults);

  return (
    <>
      <ProductsWithPagination productData={shopResults} />
    </>
  );
};

export default Shop;
