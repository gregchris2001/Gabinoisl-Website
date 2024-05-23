import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckoutForm from '../Layouts/Checkout/CheckoutForm';
import CheckoutCart from '../Layouts/Checkout/CheckoutCart';
import ProductContext from '../../store/product-context';

const Checkout = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const { cartData } = useContext(ProductContext);

    useEffect(() => {
      let total = 0;
      let count = 0;

      cartData.forEach(item => {
        total += item.price * item.quantity;
        count ++
      });

      setTotalAmount(total);
      setCartItemCount(count);
    }, [cartData]);
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Checkout</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <CheckoutForm 
                        totalAmount={totalAmount}
                        cartData={cartData}
                    />
                </Col>
                <CheckoutCart 
                    cartData={cartData}
                    totalAmount={totalAmount}
                    cartItemCount={cartItemCount}
                />
            </Row>
        </Container>
    )
}

export default Checkout;