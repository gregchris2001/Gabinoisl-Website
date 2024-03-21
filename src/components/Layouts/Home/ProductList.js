import ProductItem from './ProductItem';

const ProductList = ({productData}) => {

    return (
        <>
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