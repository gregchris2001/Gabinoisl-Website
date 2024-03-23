import { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImageGrid from '../Layouts/Product/ImageGrid'; 
import ShippingDetailsCard from '../Layouts/Product/ShippingDetailsCard'; 
import QuantityButtonGroup from '../Layouts/Product/QuantityButtonGroup';
import DescriptionComponent from '../Layouts/Product/DescriptionComponent'; 
import FeaturesTable from '../Layouts/Product/FeaturesTable'; 
import RecentlyViewed from '../Layouts/Product/RecentlyViewed';
import ProductContext from '../../store/product-context';

const Product = () => {
    const { cartData, addCartData, changeCartProductQuantity, removeCartData } = useContext(ProductContext);
    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Check if product is in cart
        const productInCart = cartData.find(product => product.id === 'product_id'); // Replace 'product_id' with your product ID
        if (productInCart) {
            setInCart(true);
            setQuantity(productInCart.quantity);
        } else {
            setInCart(false);
            setQuantity(1);
        }
    }, [cartData]);

    const handleAddToCart = () => {
        // Add product to cart with quantity
        const product = { id: 'product_id', quantity: quantity }; // Replace 'product_id' with your product ID
        addCartData(product);
    };

    const handleQuantityChange = (newQuantity) => {
        if (inCart) {
            // Update product quantity in cart
            changeCartProductQuantity('product_id', newQuantity); // Replace 'product_id' with your product ID
            setQuantity(newQuantity);
            if (newQuantity === 0) {
                // Remove product from cart if quantity is zero
                removeCartData('product_id'); // Replace 'product_id' with your product ID
            }
        } else {
            // Set quantity for product not in cart
            setQuantity(newQuantity);
        }
    };

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <ImageGrid /> 
                </Col>
                <Col md={6}>
                    <Row>
                        <Col>
                            <h2>Title</h2> 
                            <p>Price: $XX.XX</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ShippingDetailsCard />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant={inCart ? "secondary" : "danger"} onClick={handleAddToCart} disabled={inCart}>
                                {inCart ? "Added to Cart" : "Add to Cart"}
                            </Button>
                            <QuantityButtonGroup totalQuantity={10} quantity={quantity} onQuantityChange={handleQuantityChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DescriptionComponent description="Product Description" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FeaturesTable features={[{ name: 'Feature 1', value: 'Value 1' }, { name: 'Feature 2', value: 'Value 2' }]} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RecentlyViewed /> 
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
