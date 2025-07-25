import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css"; // ou Header.css si tu as tout centralisé

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          &copy; {new Date().getFullYear()} Sabrine Sefi. {t("footer.rights")}
        </div>
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/in/sabrine-sefi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
