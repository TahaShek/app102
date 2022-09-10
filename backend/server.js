const express=require('express')
const app=express()
const loadVariables=require('./configration/LoadMyEnviromentVaraibles')
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`your port is ${PORT}`)
})