const dotenv=require('dotenv')

let MyEnviroment={};

if(process.env.NODE_ENV === 'testing'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-testing-enviroment.env`})
}
if(process.env.NODE_ENV === 'development'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-development-enviroment.env`})
}
if(process.env.NODE_ENV === 'production'){
    MyEnviroment=dotenv.config({path:`${__dirname}/../application-production-enviroment.env`})
}

console.log(MyEnviroment)