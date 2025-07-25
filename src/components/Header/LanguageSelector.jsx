import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import frFlag from "../../assets/header/fr.png";
import enFlag from "../../assets/header/en.png";
import "./Header.css";

const LanguageSelector = ({ onInteraction }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = i18n.language;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    onInteraction?.(); // Ferme menu parent
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    onInteraction?.(); // Ferme menu parent
  };

  const languages = [
    { code: "fr", label: "Français", icon: frFlag },
    { code: "en", label: "English", icon: enFlag },
  ];

  const current = languages.find((lang) => lang.code === currentLang) || languages[0];
  const others = languages.filter((lang) => lang.code !== currentLang);

  return (
    <div className="lang-selector">
      <button className="lang-btn" onClick={toggleDropdown}>
        <img src={current.icon} alt={current.label} />
      </button>
      {isOpen && (
        <ul className="lang-dropdown">
          {others.map((lang) => (
            <li key={lang.code} onClick={() => changeLanguage(lang.code)}>
              <img src={lang.icon} alt={lang.label} />
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
