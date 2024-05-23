import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    setSelectedImage(images[0].asset.url)
  }, [images])

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
        gap: 10,
        display: "inline-flex",
      }}
    >
      <Row style={{ flexWrap: "nowrap" }}>
        <Col
          xs={12}
          md={3}
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "2rem",
            display: "inline-flex",
            width: "initial",
          }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              style={{
                width: '7rem',
                height: '9rem',
                border: selectedImage === image ? "1px black solid" : "none",
                cursor: "pointer",
              }}
              src={image.asset.url}
              alt={`image_${index}`}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </Col>
        <Col xs={12} md={9} style={{ width: "65%", }}>
          <Image
            style={{ width: '100%', height: '20rem' }}
            src={selectedImage}
            alt="selected_image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageGrid;
