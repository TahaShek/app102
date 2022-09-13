const express=require('express')
const Router=express.Router()



// calling and initilaizing the controllerr 
let {AddingTwoNumber}=require('../controllers/AdminManagementController')

// router 
Router.post('/Adding',AddingTwoNumber)
// router 

module.exports=Router