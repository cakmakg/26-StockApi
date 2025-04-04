"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */
// User Model:

const SaleSchema=new mongoose.Schema({
    //Fields
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true        
    },
    brandId:{
        type:String,
        trim:true,
        required:true,
        set:(password)=>passwordEncrypt(password)
    },
    productId:{
        type:String,
        trim:true,
        unique:[true,"This email has been taken already"],
        required:[true,"Email field must be filled"],
        validate:[(email)=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),"Please fill a valid email"]
    },
    quantity:{
        type:String,
        trim:true,
        required:true,       
    },
    price:{
        type:String,
        trim:true,      
    },
    priceTotal:{
        type:Boolean,
        default:true
    }
 
},{
    //Options
    collection:"sales",
    timestamps:true
})

module.exports=mongoose.model("Sale",SaleSchema)