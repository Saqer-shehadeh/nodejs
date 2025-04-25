


export const product=[
    {id:1,name:"first",price:100},
    {id:2,name:"second",price:200},
    {id:3,name:"third",price:300},

];

export const addproduct=(req,res)=>{
const {name,price}=req.body
const newproduct={id:product.length+1,name,price}
product.push(newproduct)
res.status(202).json({
    msg:"don",
    newproduct
})
}

export const getproduct=(req,res)=>{
    res.json(product)
}
export const putproduct=(req,res)=>{
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
}

export const patchproduct=(req,res)=>{
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
    }

export const deleteproduct=(req,res)=>{ 
        const {id}=req.params
        const index=product.findIndex(produc=>produc.id===parseInt(id))
        if(index !=-1){
            product.splice(index,1)
            res.status(200).json({
                msg:"deleted"
            })
        }else{
            res.status(404).json({
                msg:"not found"
            })
        }
    }    