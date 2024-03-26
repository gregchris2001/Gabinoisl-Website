import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const ShoppingCart = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th style={{ color: '#e53637' }}>Product</th>
                                        <th style={{ color: '#e53637' }}>Quantity</th>
                                        <th style={{ color: '#e53637' }}>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Your shopping cart items will go here */}
                                </tbody>
                            </Table>
                        </div>
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
                        <div>
                            <h6>Discount codes</h6>
                            <form>
                                <input type="text" placeholder="Coupon code" />
                                <Button type="submit">Apply</Button>
                            </form>
                        </div>
                        <div>
                            <h6>Payment</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur veniam rem!
                            </p>
                            <a href="./redirect.html" className="primary-btn">Proceed to checkout</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShoppingCart;
