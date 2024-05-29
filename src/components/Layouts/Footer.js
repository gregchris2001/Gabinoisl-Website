import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer style={{ width: "100%", backgroundColor: "gray", padding: "1.5rem" }}>
      <div style={{ color: "white" }}>
        <h5>COMPANY</h5>
        <ul>
          <li>
            <Link to="/about" style={{ color: "white" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: "white" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/blog" style={{ color: "white" }}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ color: "white" }}>
        <h5>HELP & SUPPORT</h5>
        <ul>
          <li>
            <Link to="pages/help-center" style={{ color: "white" }}>
              Help Center
            </Link>
          </li>
          <li>
            <Link to="pages/faq" style={{ color: "white" }}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ color: "white" }}>
        <h5>CUSTOMER SERVICE</h5>
        <ul>
          <li>
            <a href="" style={{ color: "white" }}>
              Mobile Support: +234-916-000-0789
            </a>
          </li>
          <li>Hours: 9:00 AM - 6:00 PM WAT</li>
          <li>
            <a href="" style={{ color: "white" }}>
              Email Support: admin@gabinoisl.com
            </a>
          </li>
          <li>Response within 24 hours</li>
          <li>
            <a href="/" style={{ color: "white" }}>
              Address: 4 Badaru Street, Off Adegoke, Surulere, Lagos
            </a>
          </li>
        </ul>
      </div>
      <div style={{ color: "white" }}>
        <h5>FOLLOW US</h5>
        {/* Add your social media icons here */}
      </div>
      <div style={{ color: "white" }}>
        <hr/>
        <p>© 2022-2023, Gabinoisl | Powered by Gregchris™</p>
      </div>
    </footer>
  );
};

export default Footer;
