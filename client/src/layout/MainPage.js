import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "./ErrorAlert.js";
import { listProducts } from "../utils/api.js";
/**
 * Defines the main page.
 * @returns {JSX.Element}
 */

function MainPage() {
  const [products, setProducts] = useState([]);
  const [productError, setProductError] = useState(null);

  useEffect(loadMainPage, []);

  function loadMainPage() {
    setProductError(null);
    setProducts([]);
    const abortController = new AbortController();
    listProducts().then(setProducts).catch(setProductError);
    return () => abortController.abort();
  }

  const productList = products.map(
    ({ product_id, product_title, url, price }) => (
      <article key={product_id} className="col-sm-12 col-lg-6 my-2">
        <img
          alt={`${product_title} Poster`}
          className="rounded"
          src={url}
          style={{ width: "100%" }}
        />
        <Link to={`/products/${product_id}`}>
          <h3 className="text-center mt-2">
            {product_title} : ${price}
          </h3>
        </Link>
      </article>
    )
  );

  return (
    <main className="container">
      <h2 className="">Latest Products</h2>
      <hr />
      <section className="row">{productList}</section>
      <ErrorAlert error={productError} />
    </main>
  );
}

export default MainPage;
