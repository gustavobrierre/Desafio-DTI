import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo-dti-preta.svg";

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="LOGO DTI" />
        </header>
        <main>
          <h1>Seu Estoque DTI Digital.</h1>
          <Link to="/products-list">
            <strong>Acessar Estoque </strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Home;
