import ProductContext from '../../../store/product-context';
import { useContext } from "react";
import ProductList from './ProductList';

const HomeProduct = () => {

    const { productData } = useContext(ProductContext)
    const filteredProducts = productData.filter(product => product.class !== null).slice(0, 8);

    return (
        <>
            <h1>Popular Product</h1>

            {filteredProducts?.map((product) => (
                <ProductList
                    productData={product}
                />
            ))}            
        </>
    )
}

export default HomeProduct;