import { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ImageGrid from "../Layouts/Product/ImageGrid";
import ShippingDetailsCard from "../Layouts/Product/ShippingDetailsCard";
import QuantityButtonGroup from "../Layouts/Product/QuantityButtonGroup";
import DescriptionComponent from "../Layouts/Product/DescriptionComponent";
import FeaturesTable from "../Layouts/Product/FeaturesTable";
import RecentlyViewed from "../Layouts/Product/RecentlyViewed";
import ProductContext from "../../store/product-context";

const Product = () => {
  const {
    productData,
    cartData,
    addCartData,
    changeCartProductQuantity,
    removeCartData,
    changeRecentlyViewed,
  } = useContext(ProductContext);
  const { state } = useLocation();
  const { item } = useParams();
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productFromState = state && state.product;
  const productFromContext = productData?.find(
    (product) => product.title === item
  );

  // Determine which product data to use
  const product = productFromState || productFromContext;

  useEffect(() => {
    // Add the current product to recently viewed list
    if (product) {
      changeRecentlyViewed(product);
    }
  }, [product, changeRecentlyViewed]);

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
    const product = { id: product.id, quantity: quantity };
    addCartData(product);
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
    <>
      {product ? (
        <Container>
          <Row>
            <Col md={6}>
              <ImageGrid images={product.images} />
            </Col>
            <Col md={6}>
              <Row>
                <Col>
                  <h2>{product.title}</h2>
                  <p>Price: {product.price}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ShippingDetailsCard />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant={inCart ? "secondary" : "danger"}
                    onClick={handleAddToCart}
                    disabled={inCart}
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </Button>
                  <QuantityButtonGroup
                    totalQuantity={product.totalQuantity}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DescriptionComponent description={product.description} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <FeaturesTable features={product.features} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <RecentlyViewed />
            </Col>
          </Row>
        </Container>
      ) : (
        <div>Product not found</div>
      )}
    </>
  );
};

export default Product;
