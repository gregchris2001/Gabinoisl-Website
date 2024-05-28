import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShopItem = ({ shop, value }) => {
  const { text, img } = shop;
  const navigate = useNavigate();

  const navigateShopHandler = () => {
    navigate(`/shop/${text}`, {state : value});
  };

  console.log(shop);
  
  return (
    <Card
      className="shop-item"
      style={{
        width: "10rem",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1.5rem",
        display: "flex",
      }}
      onClick={navigateShopHandler}
    >
      <Card.Body
        style={{
          borderRadius: "1.2rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Card.Img variant="top" src={img} />
      </Card.Body>
      <Card.Text>{text}</Card.Text>
    </Card>
  );
};

export default ShopItem;
