import React, { useState } from 'react';
import ProductContext from './product-context';

const AuthContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const changeProductData = (state) => {
    setProductData(state);
  }

  const changeCartData = (state) => {
    setCartData(state);
  }

  const changeRecentlyViewed = (state) => {
    setRecentlyViewed(state);
  }

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

export default AuthContextProvider;