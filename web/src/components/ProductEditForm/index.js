import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import { useParams } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/logo-dti-preta.svg";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const { id } = useParams();

  useEffect(() => {
    api.get(`products/${id}`).then((response) => {
      setFormData(response.data);
      console.log(formData);
    });
  }, []);

  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await api.put(`products/${id}`, formData);

    alert("Produto Alterado!");

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
          Edição do<br></br> Produto
        </h1>

        <div className="field">
          <label htmlFor="name">Nome do produto</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={formData.name}
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
              value={formData.price}
            />
          </div>
          <div className="field">
            <label htmlFor="quantity">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              onChange={handleInputChange}
              value={formData.quantity}
            />
          </div>
        </div>

        <button type="submit">Salvar alterações</button>
      </form>
    </div>
  );
}

export default ProductForm;
