const dotenv=require('dotenv')

let MyEnviroment={};

if(process.env.NODE_ENV === 'testing'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-testing-enviroment`})
}
if(process.env.NODE_ENV === 'development'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-development-enviroment`})
}
if(process.env.NODE_ENV === 'production'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-production-enviroment`})
}

console.log(MyEnviroment)