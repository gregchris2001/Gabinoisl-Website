import GabinoislHome from "../../../images/gabinoisl-home.png";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Caurosel = () => {
  const context = [
    {
      head: "FAST SHIPPING",
      icon: "fa-solid fa-truck-fast",
      text: "Fast worldwide shipping",
    },
    {
      head: "ORDER ONLINE/INSTORE",
      icon: "fa-solid fa-cart-shopping",
      text: "Place orders instore & online",
    },
    {
      head: "SHOP & SAVE",
      icon: "fa-solid fa-money-bill",
      text: "Get great discounts when you order instore",
    },
    {
      head: "CUSTOMIZATION SERVICE",
      icon: "fa-solid fa-ruler-horizontal",
      text: "A unique product created just for you",
    },
  ];

  return (
    <Card style={{ transform: "translateY(-1rem)", }}>
      <Card.Img
        variant="top"
        src={GabinoislHome}
        alt="GabinoIsl Home"
        // style={{ height: "50rem" }}
      />

      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {context.map((ctx, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.8rem",
            }}
          >
            <FontAwesomeIcon
              icon={ctx.icon}
              style={{ fontSize: "1.2rem" }}
            />
            <div className="ctx-txt">
              <h4 style={{ fontSize: "initial" }}>{ctx.head}</h4>
              <p>{ctx.text}</p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Caurosel;
