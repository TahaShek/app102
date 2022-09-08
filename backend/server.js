const express=require('express');
const app =express();
const LoadMyEnviromentVariable=require('./configration/LoadMyEnviromentVariable')
const PORT=process.env.PORT;



app.listen(PORT,()=>{

    console.log(`port is launched as  ${PORT}`);
    
})

