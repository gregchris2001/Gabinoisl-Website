import { Button, Modal, Form, InputGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchModal({handleClose, show}) {
  
  const [product, setProduct] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    handleClose();
    navigate(`/search/${product}`)
  }

  return (
    
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={submitHandler} style={{ display: 'flex', }}>
        <Form.Control
            type="text"
            placeholder="Enter Product Name..."
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        {/* <InputGroup>
          <InputGroup.Text>Search for Product</InputGroup.Text>
          
        </InputGroup> */}
        <Button variant='danger' type='submit'>
            Search
        </Button>
      </Form>

    </Modal>
  );
}

export default SearchModal;