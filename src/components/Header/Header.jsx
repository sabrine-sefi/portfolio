import React, { useContext, useReducer, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import { ThemeContext } from "../../context/ThemeContext";
import menuColor from "../../assets/header/menuColor.png";
import menuWhite from "../../assets/header/menuWhite.png";
import "./Header.css";


const initialState = {
  isMenuOpen: false,
  isMobile: window.innerWidth <= 768,
};


function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case "SET_MOBILE":
      return { ...state, isMobile: action.payload };
    case "CLOSE_MENU":
      return { ...state, isMenuOpen: false };
    default:
      return state;
  }
}

const navLinks = [
  { key: "nav.about" },
  { key: "nav.projects" },
  { key: "nav.contact" },
];

function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      dispatch({ type: "SET_MOBILE", payload: window.innerWidth <= 768 });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        dispatch({ type: "CLOSE_MENU" });
      }
    };
    if (state.isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state.isMenuOpen]);

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });
  const closeMenu = () => dispatch({ type: "CLOSE_MENU" });

  const burgerIcon = theme === "light" ? menuColor : menuWhite;

  const rightIcons = (
    <div className="right-icons">
      <LanguageSelector onInteraction={closeMenu} />
      <button className="theme-toggle" onClick={() => {
        toggleTheme();
        closeMenu();
      }}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );

  const navBar = (
    <nav>
      <ul className="nav-list">
        {navLinks.map((item) => (
          <li key={item.key}>{t(item.key)}</li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Sabrine Sefi</div>
        <div className="nav-container">
          {state.isMobile ? (
            <div className="mobile-wrapper" ref={wrapperRef}>
              <div className="burger-and-icons">
                <button className="burger-btn" onClick={toggleMenu}>
                  <img src={burgerIcon} alt="menu" />
                </button>
                {rightIcons}
              </div>
              {state.isMenuOpen && (
                <nav className="nav open">
                  <ul className="nav-list">
                    {navLinks.map((item) => (
                      <li key={item.key}>{t(item.key)}</li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          ) : (
            <>
              {navBar}
              {rightIcons}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
