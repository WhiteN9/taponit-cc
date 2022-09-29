import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import ErrorAlert from "./ErrorAlert.js";
import { listProducts, updateLike } from "../utils/api.js";
/**
 * Defines the main page.
 * @returns {JSX.Element}
 */

function MainPage() {
  const [products, setProducts] = useState([]);
  const [productError, setProductError] = useState(null);

  useEffect(loadMainPage, []);

  function loadMainPage() {
    const abortController = new AbortController();
    setProducts([]);
    listProducts().then(setProducts).catch(setProductError);
    return () => abortController.abort();
  }

  const handleUpdateLike = async (evt) => {
    try {
      const productId = evt.target.getAttribute("data-product-id-like");
      await updateLike(productId);
      loadMainPage();
    } catch (error) {
      if (error.name !== "AbortError") {
        setProductError(error);
      } else return;
    }
  };

  return (
    <main>
      <h1>Main Page</h1>
      <div className="row">
        <div className="col">
          <div className="d-md-flex mb-3">
            <h4 className="mb-0">Products</h4>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">URL</th>
                  <th scope="col">Price</th>
                  <th scope="col">Likes</th>
                </tr>
              </thead>
              <tbody>
                <ProductList
                  products={products}
                  handleUpdateLike={handleUpdateLike}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ErrorAlert error={productError} />
    </main>
  );
}

export default MainPage;
