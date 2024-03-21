import React, { useState } from 'react';
import ProductContext from './product-context';

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const changeProductData = (state) => {
    setProductData(state);
  }

  const changeCartData = (newCartData) => {
    setCartData(prevCartData => [...prevCartData, newCartData]);
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
        changeCartData: changeCartData,
        recentlyViewed: recentlyViewed,
        changeRecentlyViewed: changeRecentlyViewed,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;