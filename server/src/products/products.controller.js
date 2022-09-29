import * as service from "./products.service.js";

/**
 * List handler for product resources
 */
async function list(req, res) {
  const productList = await service.list();
  res.json({ data: productList });
}

/**
 * Read handler for single product resource.
 */
function read(req, res) {
  res.json({ data: res.locals.product });
}

/**
 * Put handler for updating the Like count
 */
async function updateLike(req, res) {
  const updateProduct = {
    ...res.locals.product,
    status: req.body.date.like + 1,
  };
  const updatedProd = await service.updateLike(updateProduct);
  res.json({ data: updatedProd });
}

/**
 * Todo: Middleware validations for the GET read request
 */

async function productExists(req, res, next) {
  const prodId = req.params.prodId;
  const product = await service.read(prodId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product ${prodId} is not found.` });
}

/**
 * Todo: Middleware validations for the PUT update request
 */

export default {
  list,
  read: [productExists, read],
  updateLike: [productExists, updateLike],
};
