const express=require('express');
const app =express();
const PORT=3222;



app.listen(PORT,()=>{

    console.log(`port is launched as  ${PORT}`);
    // console.log(process.env)
    // console.log(__dirname)
})

