import { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { PaystackButton } from "react-paystack";

const CheckoutForm = ({ totalAmount, cartData }) => {
  const publicKey = "pk_test_15793661a775d86467c092f068aba18ed206f9b3";
  const amount = totalAmount * 100;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    notes: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission here
  };

  const cartCustomFields = cartData?.map((item) => {
    const totalPrice = item.quantity * item.price;
    return {
      display_name: item.title,
      variable_name: item.title.toLowerCase().replace(/\s/g, "_"),
      value: `Quantity: ${item.quantity}, Total Price: ₦${totalPrice}`,
    };
  });

  const handleSuccess = (reference) => {
    setModalMessage(
      `Payment Successful! This is your reference number ${reference.reference}`
    );
    setShowModal(true);
    console.log(reference);
  };

  const handleClose = () => {
    setModalMessage("Are you sure you want to cancel payment?");
    setShowModal(true);
  };

  const componentProps = {
    email: formData.email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: `${formData.firstName} ${formData.lastName}`,
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: formData.address,
        },
        {
          display_name: "Phone Number",
          variable_name: "number",
          value: formData.phoneNumber,
        },
        {
          display_name: "Notes",
          variable_name: "notes",
          value: formData.notes,
        },
        ...cartCustomFields,
      ],
    },
    publicKey,
    text: "PROCEED WITH PAYMENT",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  console.log(componentProps);

  return (
    <>
      <Form id="paymentForm" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={6} className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Delivery Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="1234 Main St"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="08056003042@gmail.com"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter notes here"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </Form.Group>

        <hr className="mb-4" />

        <h4 className="mb-3">Payment</h4>
        <hr className="mb-4" />

        {/* <Button variant="danger" type="submit">
          <img
            src="https://paymentgateway.interswitchgroup.com/paymentgateway/public/images/isw_paynow_btn.png"
            alt="Pay Now"
            style={{ float: 'left' }}
            className="isw-pay-logo"
          />
          <span style={{ marginTop: '10px', display: 'inline-block', marginLeft: '8px' }}>
          </span>
        </Button> */}
        <PaystackButton className="btn btn-danger" {...componentProps} />
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutForm;
