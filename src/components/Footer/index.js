import React from 'react';
import { FaGithub } from "react-icons/fa";

import './styles.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      <span>Desenvolvido por Sistemtyse</span>
      <div className="social-network-container">
        <a href="https://github.com/Bruno-Casas" target="_blank">
          <FaGithub /> Bruno-Casas
        </a>
        <a href="https://github.com/JuliandroR" target="_blank">
          <FaGithub /> JuliandroR
        </a>
      </div>
    </footer>
  );
}

