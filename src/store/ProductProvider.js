import { useState, useEffect } from 'react';
import ProductContext from './product-context';

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);
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
    console.log(recentlyViewed);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  useEffect(() => {
  if (cartData.length > 0 && cartUpdated) { 
    localStorage.setItem('cartData', JSON.stringify(cartData));
  } else if (cartData.length <= 0 && cartUpdated) {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }
  }, [cartData]);

  const changeBlogPosts = (state) => {
    setBlogPosts(state);
  }

  const changeProductData = (state) => {
    setProductData(state);
  }

  const addCartData = (newCartData) => {
    setCartData(prevCartData => [...prevCartData, newCartData]);
    setCartUpdated(true);
  };

  const removeCartData = (productSlugToRemove) => {
    setCartData(prevCartData => prevCartData.filter(product => product.slug.current !== productSlugToRemove.current));
    setCartUpdated(true);
  };

  const changeCartProductQuantity = (productSlug, newQuantity) => {
    setCartData(prevCartData => {
      return prevCartData.map(product => {
        if (product.slug.current === productSlug.current) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
    });
    setCartUpdated(true);
  };
  
  
const changeRecentlyViewed = (newRecentlyViewed) => {
  setRecentlyViewed(prevRecentlyViewed => {
    // Check if the item already exists
    const exists = prevRecentlyViewed.some(item => item.slug.current === newRecentlyViewed.slug.current);

    if (!exists) {
      // If it does not exist, proceed to add
      if (prevRecentlyViewed.length >= 4) {
        prevRecentlyViewed.shift(); // Remove the first item (oldest)
      }
      return [...prevRecentlyViewed, newRecentlyViewed];
    }

    // If it exists, just return the previous state
    return prevRecentlyViewed;
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