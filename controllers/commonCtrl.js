const validation = require("../middlewears/validation")
const userM = require("../models/userModel")

const HomePage =function(req,res){
    res.render("HomePage")
}
const signupPage =function(req,res){
    res.render("signup")
}

 const addAction=function(req,res){
    // console.log(req.body)
    if(validation.name_function(req.body.userName)){
        res.send({msg:"invalid name"})
    }
    
    else if(validation.mobile_function(req.body.userphoneNumber)){
        res.send({msg:"invalid mobileNo"})
    }
    else if(validation.email_function(req.body.userEmail)){
        
        res.send({msg:"Invalid Email"});

    }
    else{
        console.log(req.body);
        const instance = new userM(req.body);

        instance.save(function (err) {
            if(err){
                // console.log(err)
                res.send({msg:"please enter unique emailid"})
            }
            else{
                res.send({msg:"Contact Added"})
            }
        })
        
    
    }
}
var listUserPage = function(req,res){
    userM.find().then(function(result){
        if(result.length>0){
            console.log(result)
            res.render("listUser",{mani:result})
        }
    })
    
}

const deleteUser =function (req,res){
    console.log(req.params)
    userM.remove({_id:req.params.userId},function (err,docs) {
        if(!err){
            res.redirect("/listUser")
        }
    })
}

module.exports={
    signupPage,
    addAction,
    HomePage,
    listUserPage,
    deleteUser 
}