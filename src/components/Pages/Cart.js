import { Container, Row, Col, Button } from 'react-bootstrap';
import CartTable from '../Layouts/Cart/CartTable';
import PaymentCard from '../Layouts/Cart/PaymentCard';

const Cart = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={8}>
                        <Row>
                            <CartTable />
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={6}>
                                <div>
                                    <a href="./shop.html" style={{ color: '#444444' }}>Continue Shopping</a>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <div>
                                    <Button variant="primary" className="update-cart-btn" id="update-cart-btn">
                                        <i className="fa fa-spinner"></i> Update cart
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <PaymentCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;