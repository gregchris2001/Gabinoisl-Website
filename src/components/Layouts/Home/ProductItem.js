import { useContext, useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import QuantityButtonGroup from "../Product/QuantityButtonGroup";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../store/product-context";

const ProductItem = ({ product }) => {
  const { cartData, addCartData, changeCartProductQuantity, removeCartData } =
    useContext(ProductContext);
  const { title, images, price } = product;
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const productPageHandler = () => {
    navigate(`/product/${title}`);
  };

  useEffect(() => {
    // Check if product is in cart
    const productInCart = cartData?.find(
      (product) => product.id === product.id
    );
    if (productInCart) {
      setInCart(true);
      setQuantity(productInCart.quantity);
    } else {
      setInCart(false);
      setQuantity(1);
    }
  }, [cartData]);

  const handleAddToCart = () => {
    // Add product to cart with quantity
    const cartProduct = { id: product.id, quantity: quantity };
    addCartData(cartProduct);
  };

  const handleQuantityChange = (newQuantity) => {
    if (inCart) {
      // Update product quantity in cart
      changeCartProductQuantity(product.id, newQuantity);
      setQuantity(newQuantity);
      if (newQuantity === 0) {
        // Remove product from cart if quantity is zero
        removeCartData(product.id);
      }
    } else {
      // Set quantity for product not in cart
      setQuantity(newQuantity);
    }
  };

  return (
    <Card style={{ width: "18rem" }} onClick={productPageHandler}>
      <Card.Img variant="top" src={images[0].asset.url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text
          style={{ color: "#EC2D01", fontSize: 15, fontWeight: "600" }}
        >
          ₦ {price}
        </Card.Text>
        <Card.Text
          style={{ color: "#B5B5B5", fontSize: 10, fontWeight: "600" }}
        >
          24H Delivery within Lagos
        </Card.Text>
        <div style={{ color: "white", fontSize: 10, fontWeight: "600" }}>
          Fast Delivery
        </div>
        <Row>
          <Col>
            <Button
              variant={inCart ? "secondary" : "danger"}
              onClick={handleAddToCart}
              disabled={inCart}
            >
              {inCart ? "Added to Cart" : "Add to Cart"}
            </Button>
          </Col>
          <Col>
            <QuantityButtonGroup
              totalQuantity={product.totalQuantity}
              quantity={quantity}
              onQuantityChange={handleQuantityChange}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
