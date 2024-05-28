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

  // console.log(product);

  useEffect(() => {
  // Check if product is in cart
  const productInCart = cartData?.find(p => p.slug.current === product?.slug.current);
  // console.log(cartData, productInCart, !!productInCart);
  setInCart(!!productInCart);
  setQuantity(productInCart ? productInCart.quantity : 1);
}, [cartData, product]); // Ensures useEffect runs only if cartData or product changes


  const handleAddToCart = () => {
    // Add product to cart with quantity
    const cartProduct = { ...product, quantity: quantity };
      console.log(cartProduct);
    addCartData(cartProduct);
  };

  const handleQuantityChange = (newQuantity) => {
    console.log(inCart, newQuantity);
    setQuantity(newQuantity);

    if (inCart) {
      // Update product quantity in cart
      changeCartProductQuantity(product.slug, newQuantity);
    } 
  };

  const handleRemoveCartData = () => {
    if (inCart) {
      removeCartData(product.slug);
    }
  };

  const getButtonText = () => {
      if (product.total_quantity <= 0) {
          return 'Out of Stock';  // No stock available
      }
      if (inCart) {
          return 'Added to Cart';  // Item is in the cart
      }
      return 'Add to Cart';  // Item can be added to cart
  };

  return (
    <Card className="product-item" style={{ width: "10rem", alignItems: 'center', paddingBottom: '1rem', }}>
      <Row onClick={productPageHandler}>
        <Card.Img 
          variant="top" 
          src={images && images.length > 0 ? images[0].asset.url : "https://via.placeholder.com/150"}
          style={{ height: "12rem", }} 
        />
        <Card.Body>
          <Card.Title style={{ fontSize: 15, }}>{title}</Card.Title>
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
          <Card.Text style={{ color: "blue", fontSize: 10, fontWeight: "600" }}>
            Fast Delivery
          </Card.Text>
        </Card.Body>
      </Row>
      <Row style={{ width: "100%", gap: " 0.5rem", textAlign: "center", }}>
        <Col>
          <Button
            variant={inCart ? "secondary" : "danger"}
            onClick={handleAddToCart}
            disabled={inCart ||product.total_quantity <= 0}
          >
            {getButtonText()}
          </Button>
        </Col>
        <Col>
          <QuantityButtonGroup
            totalQuantity={product.total_quantity}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            removeCartDataHandler={handleRemoveCartData}
            inCart={inCart}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;
