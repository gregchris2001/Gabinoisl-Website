import { Form, Button, Row, Col } from 'react-bootstrap';
import { PaystackButton } from 'react-paystack';

const CheckoutForm = () => {

  const publicKey = "pk_your_public_key_here";
  const totalAmount = total * 100;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to handle form submission here
  };

  const componentProps = {
    email : formData.email,
    amount : totalAmount,
    metadata: {
      firstName : formData.firstName,
      lastName : formData.lastName,
      address : formData.address,
      phoneNumber : formData.phoneNumber,
      notes : formData.notes
    },
    publicKey,
    text: "PROCEED WITH PAYMENT",
    onSuccess: (reference) =>
      alert(reference),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
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
      
      <Button variant="danger" type="submit">
        <img
          src="https://paymentgateway.interswitchgroup.com/paymentgateway/public/images/isw_paynow_btn.png"
          alt="Pay Now"
          style={{ float: 'left' }}
          className="isw-pay-logo"
        />
        <span style={{ marginTop: '10px', display: 'inline-block', marginLeft: '8px' }}>
          <PaystackButton {...componentProps} />
        </span>
      </Button>
    </Form>
  );
};

export default CheckoutForm;
