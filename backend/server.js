const express=require('express')
const app=express()
const cors=require('cors')
const myvaraible=require('./configration/LoadMyVaraible')
const DataBase=require('./configration/database')
const PORT=process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.text())
app.use(express.raw())
// const PORT=process.env.PORT 
app.use(cors())

// setting the header of the application 
// app.all('*',(req,res,next)=>{
//     console.log(req.body)
//     // this is how we protect the api 
//     res.header('Access-Control-Allow-Origin','*');// So it make the header allow to the origin when cross platfrom try to exchange the data
//     res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept, Authorization')
//     if(req.method==='OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT','POST','DELETE','GET','PATCH')
//     }
//     next()
// })
// setting the header of the application 


// start block of accessing  routes 
const AdminManagemnet=require('./routes/AdminManagmentRoutes')
// start block of routes 

// using routes
app.use('/Admin',AdminManagemnet) 
// using routes


app.listen(PORT,()=>{
    console.log(`your port is ${PORT}`)
    // console.log(process.env)
})





























// block start dependencies
// const  express=require('express')
// const cors=require('cors')
// const myvaraible=require('./configration/LoadMyVaraible')
// const DataBase=require('./configration/database')
// block start dependencies


// block initlization and meta data ,.....information
// const app=express();
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(express.text())
// app.use(express.raw())
// const PORT=process.env.PORT 

// app.use(cors())

// // block initlization and meta data ,.....information



// // setting the header of the application 
// app.all('*',(req,res,next)=>{
//     console.log(req.body)
//     // this is how we protect the api 
//     res.header('Access-Control-Allow-Origin','*');// So it make the header allow to the origin when cross platfrom try to exchange the data
//     res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept, Authorization')
//     if(req.method==='OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT','POST','DELETE','GET','PATCH')
//     }
// })

// start block of accessing  routes 
// let AdminManagemnet=require('./routes/AdminManagmentRoutes')
// start block of routes 

// using routes
// app.use('/admin',AdminManagemnet) 
// using routes


// // LISTENIG 
// app.listen(PORT,()=>{
//     console.log(`application is launched  ${PORT}`)
//     })