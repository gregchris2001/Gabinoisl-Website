import {  ListGroup } from 'react-bootstrap';

const CheckoutCartItem = ({ title, quantity, price }) => {

    let totalQuantity = quantity * price;

    return (
        <ListGroup.Item 
            className="d-flex justify-content-between"
        >
            <span>{title}</span>
            <span>{quantity}</span>
            <strong id="total">{totalQuantity}</strong>
        </ListGroup.Item>
    );
};

export default CheckoutCartItem;
