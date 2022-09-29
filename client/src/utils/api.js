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

    //parse the response to json
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.log(error);
    }
  }
}

/**
 * Retrieves all existing products.
 * @param signal
 * Optional AbortController.signal
 */
export async function listProducts(signal) {
  const url = new URL(`${API_BASE_URL}/products`);
  return await fetchJson(url, { headers, signal }, []);
}

/**
 * Retrieves a product by the param ID.
 * @param paramId
 * The product Id.
 * @param signal
 * Optional AbortController.signal
 */
export async function readProduct(prodId, signal) {
  const url = new URL(`${API_BASE_URL}/products/${prodId}`);
  return await fetchJson(url, { headers, signal }, []);
}

/**
 * Sends the a request to add 1 to the like count.
 * @param data
 * The product to save with the new like count.
 * @param signal
 * Optional AbortController.signal
 */
export async function updateLike(data, signal) {
  const url = new URL(`${API_BASE_URL}/products/${data.product_id}`);
  const options = {
    headers,
    signal,
    method: "PUT",
    body: JSON.stringify({ data }),
  };
  return await fetchJson(url, options, data);
}
