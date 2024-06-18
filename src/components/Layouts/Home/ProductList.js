import ProductItem from "./ProductItem";
import CustomAlert from "../../Ui/CustomAlert";
import { useState } from "react";

const ProductList = ({ productData }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState('success');

  return (
    <>
      <CustomAlert
        show={showAlert}
        onClose={() => setShowAlert(false)}
        message={alertMessage}
        variant={alertVariant}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", width: "100%", }}>
        {productData?.map((product, index) => (
          <ProductItem 
            key={index} 
            product={product} 
            setShowAlert={setShowAlert}
            setAlertMessage={setAlertMessage}
            setAlertVariant={setAlertVariant}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
