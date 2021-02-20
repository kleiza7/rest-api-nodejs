const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AdminSchema = new Schema({
    name:{
        type:String,
        required:[true, 'Please provide a name']
    },
    email:{
        type: String,
        require: [true, "Please provide a email"],
        unique : true,
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email",
        ]
    },
    password:{
        type:String,
        minlength:[6, "Please provide a password at least 6 character"],
        required:[true, "Please provide a password"],
    },
    createdAt:{
        type: Date,
        default : Date.now
    },
    isBanned:{
        type:Boolean,
        default:false
    },
    status:{
            type:String,
            default:"admin"
        
    }
});


module.exports = mongoose.model('Admin', AdminSchema);