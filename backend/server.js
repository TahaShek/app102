const express=require('express')
const app=express()
const myvaraible=require('./configration/LoadMyVaraible')
const DataBase=require('./configration/database')
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`your port is ${PORT}`)
    // console.log(process.env)
})


