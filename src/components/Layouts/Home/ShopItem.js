import { Card } from 'react-bootstrap';

const ShopItem = ({ text, img }) => {
  return (
    <Card style={{ width: '18rem', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '1.5rem', display: 'flex' }}>
      <Card.Body style={{ borderRadius: '1.2rem', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Card.Img variant="top" src={img} />
      </Card.Body>
      <Card.Text>{text}</Card.Text>
    </Card>
  );
};

export default ShopItem;
