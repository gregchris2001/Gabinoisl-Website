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
                                    <a href="/shop" style={{ color: '#444444' }}>Continue Shopping</a>
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