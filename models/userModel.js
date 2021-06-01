const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:String,
    userphoneNumber:{type: Number,unique: true},
    userEmail: {type: String,required: true,unique: true},
    
  });

  userSchema.plugin(uniqueValidator)

  const userModel = mongoose.model('singupusers', userSchema);

  module.exports=userModel;