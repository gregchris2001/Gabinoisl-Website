import { Container, Row, Col } from 'react-bootstrap';
import CheckoutForm from '../Layouts/Checkout/CheckoutForm';
import CheckoutCart from '../Layouts/Checkout/CheckoutCart';


const Checkout = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Checkout</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <CheckoutForm />
                </Col>
                <CheckoutCart />
            </Row>
        </Container>
    )
}

export default Checkout;