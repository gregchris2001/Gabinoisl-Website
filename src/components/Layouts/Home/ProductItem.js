import { Card, Button } from 'react-bootstrap';


const ProductItem = ({ product }) => {
  const { title, img, price } = product;

    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{ color: '#EC2D01', fontSize: 15, fontWeight: '600' }}>₦ {price}</Card.Text>
            <Card.Text style={{ color: '#B5B5B5', fontSize: 10, fontWeight: '600' }}>24H Delivery within Lagos</Card.Text>
            <div style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>Fast Delivery</div>
            <Button variant="primary" style={{ backgroundColor: '#B5B5B5', borderRadius: '5px' }}>
              Add to cart
            </Button> 
          </Card.Body>
        </Card>
    )
}

export default ProductItem;