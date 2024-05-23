import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ProductContext from "../../store/product-context";
import ProductsWithPagination from "../Layouts/Home/ProductsWithPagination";

const Shop = () => {
  const [shopResults, setShopResults] = useState([]);
  const [resultChanged, setResultChanged] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams();
  const { productData } = useContext(ProductContext);
  const value = location.state?.value || null;

  // console.log(category, value);



  useEffect(() => {
    filterProducts();
  }, [productData, category, value]);

  const filterProducts = () => {
    if (productData && category && value) {
      const filteredProducts = productData?.filter(
        (product) => product[value]?.toLowerCase() === category.toLowerCase()
      );
      setShopResults(filteredProducts);
      setResultChanged(true)
    }
  };

  useEffect(() => {

    console.log(resultChanged, shopResults);

    if (!value) {
      navigate("/shop");
    } else if (resultChanged && shopResults.length == 0) {
      navigate("/shop");
    }
  }, [value, shopResults]);

  return (
    <>
      <ProductsWithPagination productData={value ? shopResults : productData} />
    </>
  );
};

export default Shop;
