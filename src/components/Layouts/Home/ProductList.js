import ProductItem from './ProductItem';
import ProductContext from '../../../store/product-context';
import { useContext } from "react";

const ProductList = () => {

    const { productData } = useContext(ProductContext)

    return (
        <>
            <h1>Popular Product</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {productData?.map((product, index) => (
                <ProductItem 
                    key={index}
                    product={product}
                />
            ))}
            </div>
            
        </>
    )
}

export default ProductList;