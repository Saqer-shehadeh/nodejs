import * as handlers from "./product.handlers.js"
import express from "express"

const productRouter=express.Router()

productRouter.route("/")
    .post(handlers.addproduct)
    .get(handlers.getproduct)

productRouter.route("/:id")
    .put(handlers.putproduct)
    .patch(handlers.patchproduct)
    .delete(handlers.deleteproduct)

    export default productRouter