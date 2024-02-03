import ProductImg from '../../../images/product-img.png';
import ProductItem from './ProductItem';

const ProductList = () => {

    const products = [
        { title : 'Luxury Solar System Spiral Raindrop Chandelier For Foyer and Entryway', 
            img : ProductImg, 
            price : '55,000'
        }
    ];

    return (
        <>
            <h1>Popular Product</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {products.map((product, index) => (
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