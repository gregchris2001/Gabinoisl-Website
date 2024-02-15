import React from 'react';

const ProductContext = React.createContext({
    productData : [],
    changeProductData : () => {},

    cartData : [],
    changeCartData : () => {},
    
    recentlyViewed : [],
    changeRecentlyViewed : () => {},
});

export default ProductContext;