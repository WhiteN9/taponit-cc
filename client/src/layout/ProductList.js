import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products, handleUpdateLike }) {
  const productList = products.map(
    ({ product_id, product_title, description, url, price, likes }) => {
      return (
        <tr key={product_id}>
          <td>{product_id}</td>
          <td>{product_title}</td>
          <td>{description}</td>
          <td>{url}</td>
          <td>{price}</td>
          <td>
            <button
              type="button"
              data-product-id-like={product_id}
              className="btn btn-light"
              onClick={handleUpdateLike}
            >
              {likes}
            </button>
          </td>
        </tr>
      );
    }
  );

  return productList;
}

export default ProductList;
