import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentCard = () => {
    const navigate = useNavigate();

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur veniam rem!
                </Card.Text>
                <Button variant="danger" onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
            </Card.Body>
        </Card>
    );
};

export default PaymentCard;
