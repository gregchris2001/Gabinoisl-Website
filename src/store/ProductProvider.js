import { useState, useEffect } from 'react';
import ProductContext from './product-context';

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);

  // Load recently viewed data from local storage on component mount
  useEffect(() => {
    const storedRecentlyViewed = localStorage.getItem('recentlyViewed');
    const storedCartData = localStorage.getItem('cartData');

    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }

    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  // Save recently viewed data to local storage whenever it updates
  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  const changeBlogPosts = (state) => {
    setBlogPosts(state);
  }

  const changeProductData = (state) => {
    setProductData(state);
  }

  const addCartData = (newCartData) => {
    setCartData(prevCartData => [...prevCartData, newCartData]);
  };

  const removeCartData = (productIdToRemove) => {
    setCartData(prevCartData => prevCartData.filter(product => product.id !== productIdToRemove));
  };

  const changeCartProductQuantity = (productId, newQuantity) => {
    setCartData(prevCartData => {
      return prevCartData.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
  };
  
  const changeRecentlyViewed = (newRecentlyViewed) => {
    setRecentlyViewed(prevRecentlyViewed => {

      if (prevRecentlyViewed.length >= 4) {
        prevRecentlyViewed.shift(); // Remove the first item (oldest)
      }

      return [...prevRecentlyViewed, newRecentlyViewed];
    });
  };
  
  

  return (
    <ProductContext.Provider
      value={{
        productData: productData,
        changeProductData: changeProductData,
        cartData: cartData,
        addCartData: addCartData,
        removeCartData: removeCartData,
        changeCartProductQuantity: changeCartProductQuantity,
        recentlyViewed: recentlyViewed,
        changeRecentlyViewed: changeRecentlyViewed,
        blogPosts: blogPosts,
        changeBlogPosts: changeBlogPosts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;