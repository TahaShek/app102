// start adding dependencies 

// start adding dependencies 


// start defining and initliazing controller 
let AddingTwoNumber=(req,res)=>{
    const{number1,number2}=req.body;
    const result=number1+number2
res.json({
    Result:result
})
}

module.exports={AddingTwoNumber}