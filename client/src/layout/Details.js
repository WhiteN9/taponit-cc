import React from "react";

function Details({ product, handleUpdateLike }) {
  const { product_id, product_title, description, price, likes } = product;
  return (
    <section>
      <h3 className="mb-4">{product_title}</h3>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>
        <strong>Likes:</strong> {likes}
      </p>
      <p>Click the button to add a like: </p>
      <button
        type="button"
        data-product-id-like={product_id}
        className="btn btn-light"
        onClick={handleUpdateLike}
      >
        +1
      </button>
    </section>
  );
}

export default Details;
