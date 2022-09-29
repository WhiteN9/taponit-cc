import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import ProductNav from "./ProductNav";
import { readProduct, updateLike } from "../utils/api";
import ErrorAlert from "./ErrorAlert";

function DetailedProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProduct(productId);
  }, [productId]);

  function loadProduct(productId) {
    setError(null);
    setProduct({});
    const abortController = new AbortController();
    readProduct(productId).then(setProduct).catch(setError);
    return () => abortController.abort();
  }

  const handleUpdateLike = async (evt) => {
    evt.currentTarget.disabled = true;
    try {
      const updateLikeCount = await updateLike(productId);
      setProduct(updateLikeCount);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error);
      } else return;
    }
  };

  //todo: handle UnLike button handler

  return (
    <div className="container">
      <ProductNav productId={product.product_id} />
      <section className="row mt-4">
        <article className="col-sm-12 col-md-9 col-lg-6">
          <img
            alt={`${product.product_title} Pokemon`}
            className="rounded"
            src={product.url}
            style={{ width: "100%" }}
          />
        </article>
        <aside className="col-sm-12 col-md-6 col-lg-9">
          <Details product={product} handleUpdateLike={handleUpdateLike} />
        </aside>
      </section>
      <ErrorAlert error={error} />
    </div>
  );
}

export default DetailedProduct;
