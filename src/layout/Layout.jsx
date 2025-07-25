import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './Layout.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
