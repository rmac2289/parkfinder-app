import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-list-item">2020 Ross MacDonald</li>
        <li className="footer-list-item">
          <a
            className="footer-list-item"
            href="https://ross-scott-macdonald.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}
