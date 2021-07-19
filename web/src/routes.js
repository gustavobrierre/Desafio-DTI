import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreateProduct from "./pages/CreateProduct";
import ListProduct from "./pages/ListProduct";
import EditProduct from "./pages/EditProduct";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreateProduct} path="/create-product" />
      <Route component={EditProduct} path="/edit-product/:id" />
      <Route component={ListProduct} path="/products-list" />
    </BrowserRouter>
  );
};

export default Routes;
