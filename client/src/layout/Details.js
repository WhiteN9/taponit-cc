import React from "react";

function Details({ product, handleUpdateLike }) {
  const { product_id, product_title, description, price, likes } = product;
  return (
    <section>
      <h3 className="font-poppins-heading mb-4">{product_title}</h3>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <button
        type="button"
        data-product-id-like={product_id}
        className="btn btn-light"
        onClick={handleUpdateLike}
      >
        {likes}
      </button>
    </section>
  );
}

export default Details;
