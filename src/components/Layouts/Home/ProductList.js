import ProductItem from "./ProductItem";
import { Alert } from "react-bootstrap";
import { useState } from "react";

const ProductList = ({ productData }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  return (
    <>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          {alertMessage}
        </Alert>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", width: "100%", }}>
        {productData?.map((product, index) => (
          <ProductItem 
            key={index} 
            product={product} 
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
