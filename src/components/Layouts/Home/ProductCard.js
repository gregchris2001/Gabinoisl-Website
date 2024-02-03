import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/365x232" />
      <Card.Body>
        <Card.Title>Luxury Solar System Spiral Raindrop Chandelier For Foyer and Entryway</Card.Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div> {/* You can customize this div as needed */}
            {/* Icon or other content */}
          </div>
          <div style={{ color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '500' }}>
            40 Reviews
          </div>
        </div>
        <Card.Text style={{ color: '#EC2D01', fontSize: 15, fontWeight: '600' }}>₦ 55,000</Card.Text>
        <Card.Text style={{ color: '#9D9D9D', fontSize: 12, fontWeight: '600', textDecoration: 'line-through' }}>₦ 65,000</Card.Text>
        <Card.Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>save</Card.Text>
        <Card.Text style={{ color: '#EC2D01', fontSize: 10, fontWeight: '400' }}>₦ 10,000</Card.Text>
        <Card.Text style={{ color: '#B5B5B5', fontSize: 10, fontWeight: '600' }}>24H Delivery within Lagos</Card.Text>
        <div style={{ display: 'flex', gap: '5px' }}>
          <div style={{ width: '37px', height: '7px', background: 'rgba(236, 45, 1, 0.25)' }}></div>
          <div style={{ width: '37px', height: '7px', background: 'rgba(236, 45, 1, 0.50)' }}></div>
          <div style={{ width: '37px', height: '7px', background: '#EC2D01' }}></div>
        </div>
        <div style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>Fast Delivery</div>
        <Button variant="primary" style={{ backgroundColor: '#B5B5B5', borderRadius: '5px' }}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
