/**
 * Defines the router for reservation resources.
 */

import express from "express";
import controller from "./products.controller.js";
import methodNotAllowed from "../errors/methodNotAllowed.js";

const router = express.Router();
router.route("/").get(controller.list).all(methodNotAllowed);

router
  .route("/:prodId")
  .get(controller.read)
  .put(controller.updateLike)
  .all(methodNotAllowed);

export default router;
