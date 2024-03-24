import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].asset.url);

  const handleImageSelect = (image) => {
    setSelectedImage(image.asset.url);
  };

  return (
    <Container
      fluid
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <Row className="align-items-start">
        <Col
          xs={12}
          md={3}
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 49,
            display: "inline-flex",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              style={{
                width: 179,
                height: 179,
                border: selectedImage === image ? "1px black solid" : "none",
              }}
              src={image.asset.url}
              alt={`image_${index}`}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </Col>
        <Col xs={12} md={9}>
          <Image
            style={{ width: 670, height: 869 }}
            src={selectedImage}
            alt="selected_image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGrid;
