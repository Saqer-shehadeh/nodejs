import express from 'express';

const server = express();

const product=[
    {id:1,name:"first",price:100},
    {id:2,name:"second",price:200},
    {id:3,name:"third",price:300},

];
server.post('/product',express.json(),(req,res)=>{
const {name,price}=req.body
const newproduct={id:product.length+1,name,price}
product.push(newproduct)
res.status(202).json({
    msg:"done",
    newproduct
})
})
server.get('/product',(req,res)=>{
    res.json(product)
})
server.put('/product/:id',express.json(),(req,res)=>{
const {id}=req.params
const {name,price}=req.body
const index=product.findIndex(prod => prod.id === parseInt(id))
if(index===-1){
    res.status(404).json({
        msg:"not found"
    })
}
product[index]={...product[index],name,price}
res.status(200).json(product)
})
server.patch('/product/:id',express.json(),(req,res)=>{
    const {id}=req.params
    const {name,price}=req.body
    const index=product.findIndex(prod => prod.id === parseInt(id))
    if(index===-1){
        res.status(404).json({
            msg:"not found"
        })
    }
    if(name){
        product[index].name=name
    }
    if(price){
        product[index].price=price
    }
    res.json(product[index])
    })
    


server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});


