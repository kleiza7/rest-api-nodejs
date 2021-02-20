const Admin = require('../models/Admin');
const User = require('../models/User');
const asyncErrorWrapper = require('express-async-handler');

//Admin koleksiyonundan bütün dökümanları almamızı sağlayan controller
const getAllAdmins = asyncErrorWrapper(async(req, res, next) =>{

    const admins = await Admin.find();
   
    res
    .status(200)
    .json({
        success:true,
        data:admins    
    });

});

//Tek bir admin almamızı sağlayan controller
const getSingleAdmin = asyncErrorWrapper(async(req, res, next) =>{
    const id = req.params.id;
    const admin = await Admin.findById(id);
   
    res
    .status(200)
    .json({
        success:true,
        data:admin
    });

});

// yeni bir admin eklememizi sağlayan controller
const addAdmin = asyncErrorWrapper(async(req, res, next) =>{
    const admin = req.body;
    const admins = await Admin.create(admin);

    res
    .status(200)
    .json({
        success:true,
        data:admins
    });

});

//admin bilgilerini güncellememizi sağlayan controller
const updateAdmin = asyncErrorWrapper(async(req, res, next) =>{
    const {name, email, password} = req.body;
    const id = req.params.id;
    let admin = await Admin.findById(id);
    admin.name = name;
    admin.email = email;
    admin.password = password;
    admin = await admin.save();
   
    res
    .status(200)
    .json({
        success:true,
        data:admin
    });

});

//bir useri banlamamızı sağlayan controller
const banUser = asyncErrorWrapper(async(req, res, next) =>{
    const id = req.params.id;
    let user = await User.findById(id);
    user.isBanned = true;
    user = await user.save();

    res
    .status(200)
    .json({
        success:true,
        data: "Banned successfully."
    });

});

//ban kaldırmak için controller
const disbanUser = asyncErrorWrapper(async(req, res, next) =>{
    const id = req.params.id;
    let user = await User.findById(id);
    
    user.isBanned = false;
    user = await user.save();

    res
    .status(200)
    .json({
        success:true,
        data: "Disbanned successfully."
    });

});

//admin silmek için controller
const deleteAdmin = asyncErrorWrapper(async(req, res, next) =>{
    const id = req.params.id;
    let admin = await Admin.findByIdAndDelete(id);
   
    res
    .status(200)
    .json({
        success:true,
        data:"Admin was deleted successfully"
    });

});



module.exports = {
    getAllAdmins, 
    getSingleAdmin, 
    addAdmin, 
    updateAdmin,
    banUser,
    disbanUser,
    deleteAdmin
   
};
