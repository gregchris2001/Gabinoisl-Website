import { Col, Badge, ListGroup } from 'react-bootstrap';
import CheckoutCartItem from './CheckoutCartItem';

const CheckoutCart = ({cartData, totalAmount, cartItemCount}) => {

  return (
    <Col md={4} className="order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <Badge pill bg="danger" id="cart-badge">
          {cartItemCount}
        </Badge>
      </h4>
      <ListGroup className="mb-3" id="cart-items">
        {cartData?.map((cartItem, index) => (
            <CheckoutCartItem key={index} cartItem={cartItem} />
        ))}
      </ListGroup>
      <ListGroup.Item className="d-flex justify-content-between">
        <span>Total (Naira)</span>
        <strong id="total">₦{totalAmount}</strong>
      </ListGroup.Item>
    </Col>
  );
};

export default CheckoutCart;
