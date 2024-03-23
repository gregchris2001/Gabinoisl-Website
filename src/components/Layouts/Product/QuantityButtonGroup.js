import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityButtonGroup = ({ totalQuantity, quantity, onQuantityChange }) => {

    const incrementQuantity = () => {
        if (quantity < totalQuantity) {
            onQuantityChange(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        } else if (quantity === 1) {
            // Handle removing product from cart if needed
        }
    };

    return (
        <ButtonGroup>
            <Button variant="secondary" onClick={decrementQuantity}>-</Button>
            <Button variant="secondary" disabled>{quantity}</Button>
            <Button variant="danger" onClick={incrementQuantity}>+</Button>
        </ButtonGroup>
    );
};

export default QuantityButtonGroup;
