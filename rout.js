import productRouter from "./src/modules/product/product.routs.js";

export function init(express,server){

    server.use(express.json())
    server.use((req,res,next)=>{
        console.log(Date.now());
        req.ss="ssss"
        next()
    })
   server.use("/product",productRouter)
    
  
}
