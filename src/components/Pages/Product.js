import { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import CustomAlert from "../Ui/CustomAlert"
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
  const [alertMessage, setAlertMessage] = useState(null); 
  const [alertVariant, setAlertVariant] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const productFromState = state && state.product;
  const productFromContext = productData?.find(
    (product) => product.title === item
  );

  // Determine which product data to use
  const product = productFromState || productFromContext;
  // console.log(product, productFromContext, productFromState);
  const descriptionText = product?.description
    .map((block) => block.children.map((child) => child.text).join(" "))
    .join(" ");

  useEffect(() => {
    // Add the current product to recently viewed list
    if (product) {
      changeRecentlyViewed(product);
    }
  }, [product]);

useEffect(() => {
  // Check if product is in cart
  const productInCart = cartData?.find(p => p.slug.current === product?.slug.current);

  setInCart(!!productInCart);
  setQuantity(productInCart ? productInCart.quantity : 1);
}, [cartData, product]); // Ensures useEffect runs only if cartData or product changes


  const handleAddToCart = () => {
    // Add product to cart with quantity
    const cartProduct = { ...product, quantity: quantity };
    console.log(cartProduct);
    addCartData(cartProduct);
    setAlertMessage('Added to cart');
    setAlertVariant('success');
    setShowAlert(true);
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
      setAlertMessage('Removed from cart');
      setAlertVariant('danger');
      setShowAlert(true);
    }
  };

    const getButtonText = () => {
      if (product.total_quantity <= 0) {
          return 'Out of Stock';  // No stock available
      }
      if (inCart) {
          return 'Remove From Cart';  // Item is in the cart
      }
      return 'Add to Cart';  // Item can be added to cart
  };

  return (
    <>
      <CustomAlert
        show={showAlert}
        onClose={() => setShowAlert(false)}
        message={alertMessage}
        variant={alertVariant}
      />

      {product ? (
        <Container>
          <Row>
            <Col md={6} style={{ marginBottom: "1rem" }}>
              <ImageGrid images={product.images} />
            </Col>
            <Col 
              md={6} 
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Row>
                <Col>
                  <h2>{product.title}</h2>
                  <h4>Price: ₦ {product.price}</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ShippingDetailsCard />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <Button
                    variant={inCart ? "secondary" : "dark"}
                    onClick={inCart ? handleRemoveCartData : handleAddToCart}
                    disabled={product.total_quantity <= 0}
                  >
                    {getButtonText()}
                  </Button>
                  <QuantityButtonGroup
                    totalQuantity={product.total_quantity}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                    removeCartDataHandler={handleRemoveCartData}
                    inCart={inCart}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <DescriptionComponent description={descriptionText} />
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
