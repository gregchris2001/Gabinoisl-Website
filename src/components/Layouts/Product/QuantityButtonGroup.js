import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const QuantityButtonGroup = ({ totalQuantity }) => {
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        if (quantity < totalQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <ButtonGroup>
            <Button variant="secondary" onClick={decrementQuantity}>-</Button>
            <Button variant="secondary" disabled>{quantity}</Button>
            <Button variant="secondary" onClick={incrementQuantity}>+</Button>
        </ButtonGroup>
    );
};

export default QuantityButtonGroup;
