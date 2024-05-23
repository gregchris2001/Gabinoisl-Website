import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityButtonGroup = ({ totalQuantity, quantity, onQuantityChange, removeCartDataHandler, inCart }) => {



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
            removeCartDataHandler();
        }
    };
    
    return (
        <ButtonGroup>
            <Button variant={inCart ? "danger" : "secondary"} onClick={decrementQuantity}>-</Button>
            <Button variant="secondary" disabled>{quantity}</Button>
            <Button 
                variant={totalQuantity === 1 ? "secondary" : "danger"} 
                disabled={quantity >= totalQuantity} 
                onClick={incrementQuantity}
            >
                +
            </Button>
        </ButtonGroup>
    );
};

export default QuantityButtonGroup;
