const Package=require('../package.json')
const mogooose=require("mongoose")
const { default: mongoose } = require('mongoose')

mongoose.connect(`${process.env.DATA_BASE_URI}`,{useNewUrlParser:true,useUnifiedTopolgy:true},(error,connection)=>{
if(!error){
    console.log('MongoDB is connected Sucessfully')

}
else{
    console.log('not connected to database' + error )
}
})