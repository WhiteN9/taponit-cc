const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5001";

/**
 * Defines the default headers
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch from the specified URL and handle errors
 * @param {String} url
 * The url for the request.
 * @param {Obj} options
 * The options for the fetch.
 * @returns
 */
async function fetchJson(url, options) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) {
      return null;
    }
    const payload = await response.json();
    console.log(payload.data)
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error);
    }
  }
}

/**
 * Retrieves all existing products.
 */
export async function listProducts() {
  const url = new URL(`${API_BASE_URL}/products`);
  return await fetchJson(url, { headers });
}

/**
 * Retrieves a product by the param ID.
 * @param paramId
 * The product Id.
 */
export async function readProduct(prodId) {
  const url = new URL(`${API_BASE_URL}/products/${prodId}`);
  return await fetchJson(url, { headers });
}

/**
 * Sends the a request to add 1 to the like count.
 * @param data
 * The product to save with the new like count.
 */
export async function updateLike(prodId) {
  const url = new URL(`${API_BASE_URL}/products/${prodId}`);
  const options = {
    headers,
    method: "PUT",
  };
  return await fetchJson(url, options);
}
