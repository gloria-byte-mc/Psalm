import React from "react";
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        P<span>s</span>alm
      </div>
      <div className="footer-copy">© 2025 Psalm. All rights reserved.</div>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
    </footer>
  );
}