var validator = require('validator');


const name_function=function(name){
    return(validator.isEmpty(name) || !validator.isLength(name,{min:2,Max:20}))?true:false
}

var mobile_function=function(data){
    if(validator.isEmpty(data) || !validator.isMobilePhone(data,'en-IN')){
        return true;
    }
    else{
        return false;
    }
}
const email_function = function(emailId){
    if(validator.isEmpty(emailId) || !validator.isEmail(emailId)){
        return true;
    }
    else{
        return false;
    }
    
}


module.exports={
    name_function,
    mobile_function,
    email_function
  
}