import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";

import "./styles.css";

function ListProduct() {
  return (
    <>
      <Link to="/create-product">
        <strong>Criar Produto </strong>
      </Link>
      <main>
        <Table />
      </main>
    </>
  );
}

export default ListProduct;
