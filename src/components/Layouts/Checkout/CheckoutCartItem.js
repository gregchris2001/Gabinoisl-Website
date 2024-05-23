import {  ListGroup } from 'react-bootstrap';

const CheckoutCartItem = ({ cartItem }) => {
    let { title, quantity, price } = cartItem
    let totalQuantity = quantity * price;

    // console.log(title, quantity, price);
    return (
        <ListGroup.Item 
            className="d-flex justify-content-between"
        >
            <span>{title}</span>
            <span>{quantity}</span>
            <strong id="total">₦{totalQuantity}</strong>
        </ListGroup.Item>
    );
};

export default CheckoutCartItem;
