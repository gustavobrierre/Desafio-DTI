import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

import "./styles.css";
import logo from "../../assets/logo-dti-preta.svg";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post("products", formData);

    alert("Produto criado!");

    history.push("/products-list");
  }

  return (
    <div id="page-create-product">
      <header>
        <img src={logo} alt="DTI LOGO" />
        <Link to="/products-list">
          <FiArrowLeft />
          Voltar para Lista
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro do<br></br> Produto
        </h1>

        <div className="field">
          <label htmlFor="name">Nome do produto</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
          />
        </div>

        <div className="field-group">
          <div className="field">
            <label htmlFor="price">Preço</label>
            <input
              type="money"
              name="price"
              id="price"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit">Cadastrar produto</button>
      </form>
    </div>
  );
}

export default ProductForm;
