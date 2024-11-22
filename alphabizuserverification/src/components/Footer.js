import React from "react";
import "../styles/footer.css"; // Create this file for footer-specific styles

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        Contact Us: <a href="tel:1234567890">123 456-7890</a> for troubleshooting.
      </p>
    </footer>
  );
};

export default Footer;
