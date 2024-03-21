import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ProductContext from "../../store/product-context";
import ProductsWithPagination from "../Layouts/Home/ProductsWithPagination";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { product } = useParams();
  const navigate = useNavigate();

  const { productData } = useContext(ProductContext);

  useEffect(() => {
    setSearchResults(searchProducts(productData, product));
  }, [productData, product]);

  function searchProducts(productList, searchItem, threshold = 0.05) {
    // Filter products based on similarity scores
    const filteredProducts = productList
      .map((product) => {
        const nameScore = calculateSimilarityScore(product.title, searchItem);
        const descriptionScore = calculateSimilarityScore(
          product.description,
          searchItem
        );
        const totalScore = (nameScore + descriptionScore) / 2; // Average score
        return { ...product, score: totalScore };
      })
      .filter((product) => product.score >= threshold);

    // Sort products based on similarity scores
    const sortedProducts = filteredProducts.sort((a, b) => b.score - a.score);

    return sortedProducts;
  }

  function calculateSimilarityScore(str1, str2) {
    // Split the strings into individual words
    const words1 = str1.toLowerCase().split(" ");
    const words2 = str2.toLowerCase().split(" ");

    // Find the intersection of words
    const intersection = words1.filter((word) => words2.includes(word));
    // Calculate the Jaccard similarity coefficient
    const similarityScore =
      intersection.length /
      (words1.length + words2.length - intersection.length);
    return similarityScore;
  }

  //   console.log(productData, product);

  console.log(searchResults);

  return (
    <>
      <ProductsWithPagination productData={searchResults} />
    </>
  );
};

export default Search;
