import { useContext } from 'react';
import { Col, Badge, ListGroup } from 'react-bootstrap';
import ProductContext from '../../../store/product-context';
import CheckoutCartItem from './CheckoutCartItem';

const CheckoutCart = ({ total, cartItemCount }) => {

  const { cartData } = useContext(ProductContext);

  return (
    <Col md={4} className="order-md-2 mb-4">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <Badge pill variant="secondary" id="cart-badge">
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
        <strong id="total">₦{total}</strong>
      </ListGroup.Item>
    </Col>
  );
};

export default CheckoutCart;
