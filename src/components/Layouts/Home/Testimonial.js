import TestimonyImg from "../../../images/testimony-img.png";
import { Card } from "react-bootstrap";

const Testimonials = () => {
  const context = [
    {
      img: TestimonyImg,
      text: "Wow just wow! I’ve already told a few people about Sofary. The light was packaged very well.",
      name: "— Steven W.",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>Testimony</h1>

      {context.map((ctx, index) => (
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Card
            style={{
              width: "402px",
              height: "451px",
              paddingTop: "22px",
              paddingBottom: "135px",
              paddingLeft: "18px",
              paddingRight: "19px",
              background: "white",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "28px",
              display: "flex",
            }}
          >
            <Card.Img
              style={{ width: "365px", height: "232px" }}
              src={ctx.img}
            />
            <Card.Text
              style={{ width: "365px", textAlign: "center", color: "black" }}
            >
              {ctx.text}
            </Card.Text>
            <Card.Text
              style={{ width: "365px", textAlign: "center", color: "black" }}
            >
              {ctx.name}
            </Card.Text>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
