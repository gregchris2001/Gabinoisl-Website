import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, Children } from "react";
import ProductContext from "../../store/product-context";
import Loader from "../Ui/Loader"
import ProductsWithPagination from "../Layouts/Home/ProductsWithPagination";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const { product } = useParams();
  const navigate = useNavigate();

  const { productData } = useContext(ProductContext);

  useEffect(() => {
    setSearchResults(searchProducts(productData, product));
    setIsSearching(false);
  }, [productData, product]);

  function searchProducts(productList, searchItem, threshold = 0.05) {
    // Filter products based on similarity scores
    const filteredProducts = productList
      ?.map((product) => {
        const descriptionText = product.description
          .map((block) => block.children.map((child) => child.text).join(" "))
          .join(" ");

          const title = product.title || '';
          const description = descriptionText || '';
          
          const nameJaccardScore = calculateJaccardSimilarityScore(title, searchItem);
          const descriptionJaccardScore = calculateJaccardSimilarityScore(description, searchItem);
          const nameSubstringScore = calculateSubstringScore(title, searchItem);
          const descriptionSubstringScore = calculateSubstringScore(description, searchItem);

          // Combine scores with weights
          const nameScore = (nameJaccardScore * 0.7) + (nameSubstringScore * 0.3);
          const descriptionScore = (descriptionJaccardScore * 0.7) + (descriptionSubstringScore * 0.3);

        const totalScore = (nameScore + descriptionScore) / 2; // Average score
        return { ...product, score: totalScore };
      })
      .filter((product) => product.score >= threshold);

    // Sort products based on similarity scores
    const sortedProducts = filteredProducts.sort((a, b) => b.score - a.score);

    return sortedProducts;
  }

  function calculateJaccardSimilarityScore(str1, str2) {
    if (!str1 || !str2) return 0;

    // Split the strings into individual words
    const words1 = str1.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ');
    const words2 = str2.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(' ');

    // Find the intersection of words
    const intersection = words1.filter(word => words2.includes(word));

    // Calculate the Jaccard similarity coefficient
    const unionLength = words1.length + words2.length - intersection.length;
    const similarityScore = unionLength === 0 ? 0 : intersection.length / unionLength;
    return similarityScore;
  }

  function calculateSubstringScore(str1, str2) {
    if (!str1 || !str2) return 0;

    const normalizedStr1 = str1.toLowerCase();
    const normalizedStr2 = str2.toLowerCase();

    return normalizedStr1.includes(normalizedStr2) ? 1 : 0;
  }

  //   console.log(productData, product);

  console.log(searchResults);

  return (
    <>
      {isSearching ? 
        <Loader /> :
        <ProductsWithPagination productData={searchResults} /> 
      }
    </>
  );
};

export default Search;
