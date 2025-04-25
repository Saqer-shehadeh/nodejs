import * as handlers from './handlers.js'

export function init(express,server){
    server.use(express.json())

    server.route("/product")
    .post(handlers.addproduct)
    .get(handlers.getproduct)

    server.route("/product/:id")
    .put(handlers.putproduct)
    .patch(handlers.patchproduct)
    .delete(handlers.deleteproduct)
  
}
