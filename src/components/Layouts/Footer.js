import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Card style={{ width: "100%", backgroundColor: "gray" }}>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>COMPANY</Card.Title>
        <Card.Text>
          <Link to="/about" style={{ color: "white" }}>
            About Us
          </Link>
          <Link to="/contact" style={{ color: "white" }}>
            Contact Us
          </Link>
          <Link to="/blogs" style={{ color: "white" }}>
            Chandelier blogs
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>HELP & SUPPORT</Card.Title>
        <Card.Text>
          <Link to="pages/help-center" style={{ color: "white" }}>
            Help Center
          </Link>
          <Link to="pages/faq" style={{ color: "white" }}>
            FAQ
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>CUSTOMER SERVICE</Card.Title>
        <Card.Text>
          <a href="" style={{ color: "white" }}>
            Mobile Support: +234-916-000-0789
          </a>
          <p style={{ color: "white" }}>Hours: 9:00 AM - 6:00 PM WAT</p>
          <a href="" style={{ color: "white" }}>
            Email Support: admin@gabinoisl.com
          </a>

          <p style={{ color: "white" }}>Response within 24 hours</p>
          <a href="/" style={{ color: "white" }}>
            Address: 4 Badaru Street, Off Adegoke, Surulere, Lagos
          </a>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>FOLLOW US</Card.Title>
        <Card.Text>{/* Add your social media icons here */}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ color: "white" }}>
        © 2022-2023, Gabinoisl | Powered by Gregchris™
      </Card.Footer>
    </Card>
  );
};

export default Footer;
